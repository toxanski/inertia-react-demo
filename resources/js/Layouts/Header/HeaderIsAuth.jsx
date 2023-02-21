import { Link } from '@inertiajs/react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export function HeaderIsAuth({ username }) {
    return (
        <Container>
            <UserInfo>
                <Avatar size="large" icon={<UserOutlined />} />
                <Typography.Title level={4} style={{ margin: '0 1rem 0' }}>
                    {username}
                </Typography.Title>
            </UserInfo>
            <Link href={route('logout')} method="post" as="button">
                Logout
            </Link>
        </Container>
    );
}
