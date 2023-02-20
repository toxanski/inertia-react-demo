import { useForm } from '@inertiajs/react';
import { GuestLayout } from '@/Layouts/GuestLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import { RootProvider } from '@/Layouts/RootProvider';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
// import { useEffect } from 'react';

const LoginForm = styled(Form)`
    max-width: 300px;
    margin: 0 auto;
`;

const LoginFormForgot = styled('a')`
    float: right;
`;

const LoginFormButton = styled(Button)`
    width: 100%;
`;

// eslint-disable-next-line no-unused-vars
export default function Login({ canResetPassword, status }) {
    // eslint-disable-next-line no-unused-vars
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    // useEffect(() => {
    //     console.log('@data', data);
    //     console.log('@errors', errors);
    // }, [data, errors]);

    const onHandleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const onHandleCheckboxChange = (e) => {
        setData(e.target.name, e.target.checked);
    };

    const formSubmit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <RootProvider>
            <GuestLayout>
                <LoginForm
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    size="large"
                    onSubmit={formSubmit}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                        validateStatus={errors.email && 'error'}
                        help={errors.email}
                    >
                        <Input
                            name="email"
                            type="email"
                            placeholder="Username"
                            prefix={
                                <MailOutlined className="site-form-item-icon" />
                            }
                            onChange={onHandleInputChange}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                        validateStatus={errors.password && 'error'}
                        help={errors.password}
                    >
                        <Input.Password
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onHandleInputChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox
                                name="remember"
                                onChange={onHandleCheckboxChange}
                            >
                                Remember me
                            </Checkbox>
                        </Form.Item>

                        <LoginFormForgot
                            className="login-form-forgot"
                            href="#!"
                        >
                            Forgot password
                        </LoginFormForgot>
                    </Form.Item>

                    <Form.Item>
                        <LoginFormButton
                            type="primary"
                            htmlType="submit"
                            disabled={processing}
                            onClick={formSubmit}
                        >
                            Log in
                        </LoginFormButton>
                        Or <a href="#!">register now!</a>
                    </Form.Item>
                </LoginForm>
            </GuestLayout>
        </RootProvider>
    );
}
