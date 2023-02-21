import { RootProvider } from '@/Layouts/RootProvider';
import { GuestLayout } from '@/Layouts/GuestLayout';
import { Typography, Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { useForm, Link } from '@inertiajs/react';
import styled from '@emotion/styled';

const RegisterForm = styled(Form)`
    max-width: 360px;
    margin: 4rem auto 0;
`;

const RegisterFormButton = styled(Button)`
    width: 100%;
`;

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
};

export default function Register() {
    // eslint-disable-next-line no-unused-vars
    const { data, setData, post, processing, errors } = useForm(initialState);

    const formSubmit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const onHandleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <RootProvider>
            <GuestLayout>
                <Typography.Title style={{ textAlign: 'center' }}>
                    Sign Up
                </Typography.Title>

                <RegisterForm
                    name="normal_register"
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
                            prefix={<MailOutlined />}
                            onChange={onHandleInputChange}
                        />
                    </Form.Item>

                    <Form.Item
                        name="name-label"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                        validateStatus={errors.email && 'error'}
                        help={errors.email}
                    >
                        <Input
                            name="name"
                            type="text"
                            placeholder="Username"
                            prefix={<UserOutlined />}
                            onChange={onHandleInputChange}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password-label"
                        hasFeedback
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
                            prefix={<LockOutlined />}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onHandleInputChange}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm-password"
                        dependencies={['password-label']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, currentValue) {
                                    if (
                                        !currentValue ||
                                        getFieldValue('password-label') ===
                                            currentValue
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords that you entered do not match!'
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            onChange={onHandleInputChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <RegisterFormButton
                            type="primary"
                            htmlType="submit"
                            disabled={processing}
                            onClick={formSubmit}
                        >
                            Register
                        </RegisterFormButton>
                        <div>
                            Already have an account?{' '}
                            <Link href={route('login')}>SIGN IN</Link>
                        </div>
                    </Form.Item>
                </RegisterForm>
            </GuestLayout>
        </RootProvider>
    );
}
