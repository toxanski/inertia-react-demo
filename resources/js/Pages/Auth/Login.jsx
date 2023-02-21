import { useForm, Link } from '@inertiajs/react';
import { GuestLayout } from '@/Layouts/GuestLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import { RootProvider } from '@/Layouts/RootProvider';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Typography } from 'antd';

// import { useEffect } from 'react';

const LoginForm = styled(Form)`
    max-width: 360px;
    margin: 4rem auto 0;
`;

const LoginFormForgot = styled('a')`
    float: right;
`;

const LoginFormButton = styled(Button)`
    width: 100%;
`;

const initialState = {
    email: '',
    password: '',
    remember: false,
};

// eslint-disable-next-line no-unused-vars
export default function Login({ canResetPassword, status }) {
    // eslint-disable-next-line no-unused-vars
    const { data, setData, post, processing, errors, reset } =
        useForm(initialState);

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
                <Typography.Title style={{ textAlign: 'center' }}>
                    Sign In
                </Typography.Title>
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
                        name="email-label"
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
                            placeholder="Email"
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

                        <LoginFormForgot href="#!">
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
                        Or <Link href={route('register')}>register now!</Link>
                    </Form.Item>
                </LoginForm>
            </GuestLayout>
        </RootProvider>
    );
}
