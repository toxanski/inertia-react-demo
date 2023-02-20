import { Logo } from '@/Components/Logo';
// import { Button } from 'antd';
import { Menu, Layout, Button } from 'antd';
import { Link } from '@inertiajs/react';

import styled from '@emotion/styled';

const HeaderContainer = styled(Layout.Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.header {
        background-color: transparent;
    }

    .header__menu {
        background-color: transparent;
        border-bottom: none;
    }
`;

export const Header = () => (
    <HeaderContainer theme="light" className="header">
        <Logo />

        <Menu
            mode="horizontal"
            items={[
                {
                    key: '123',
                    label: 'Найти кандидата',
                },
                {
                    key: '1234',
                    label: 'Попасть в базу',
                },
                {
                    key: '12415',
                    label: 'О сервисе',
                },
                {
                    key: '241616',
                    label: 'Портал',
                },
            ]}
            className="header__menu"
        />

        <Button type="link">
            <Link href={route('login')}>Войти</Link>
        </Button>
    </HeaderContainer>
);
