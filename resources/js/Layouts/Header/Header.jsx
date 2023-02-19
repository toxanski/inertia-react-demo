import { Logo } from '@/Components/Logo';
// import { Button } from 'antd';
import { Menu, Layout } from 'antd';

import styled from '@emotion/styled';

const HeaderContainer = styled(Layout.Header)`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    &.header {
        background-color: transparent;
    }

    .header__menu {
        background-color: transparent;
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
                    label: 'nav-item1',
                },
                {
                    key: '1234',
                    label: 'nav-item2',
                },
            ]}
            className="header__menu"
        />
    </HeaderContainer>
);
