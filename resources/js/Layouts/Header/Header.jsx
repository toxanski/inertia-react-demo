import { Logo } from '@/Components/Logo';
// import { Button } from 'antd';
import { Menu, Layout }  from 'antd'

import styled from '@emotion/styled'

const HeaderContainer = styled(Layout.Header)`
  display: flex;
  align-items: center;
  &.header {
    background-color: #7dbcea;
  }
`

export const Header = () => (
    // <header>123445</header>
    <HeaderContainer theme='light' className="header">
        <Logo/>

        <Menu
          mode="horizontal"
          items={[
            {
              key: '123',
              label: 'nav-item1'
            },
            {
              key: '1234',
              label: 'nav-item2'
            }
          ]}
        />

    </HeaderContainer>
);