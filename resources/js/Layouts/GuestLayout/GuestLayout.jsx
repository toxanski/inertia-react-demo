import { Footer } from '../Footer';
import { Layout, Divider } from 'antd';
import styled from '@emotion/styled';
import { Logo } from '@/Components/Logo';
const LayoutWrapper = styled(Layout)`
    background-color: var(--bg-color);
    min-height: 100vh;
`;

const LayoutContainer = styled.div`
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
`;

const FooterContainer = styled(LayoutContainer)`
    margin-top: auto;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
`;

export const GuestLayout = ({ children }) => {
    return (
        <LayoutWrapper>
            <LayoutContainer>
                <Header>
                    <Logo />
                </Header>
            </LayoutContainer>

            <LayoutContainer>
                <Divider style={{ margin: 0 }} />
            </LayoutContainer>

            <LayoutContainer>
                <Layout.Content style={{ margin: '4rem 10rem' }}>
                    <div className="site-layout-content">{children}</div>
                </Layout.Content>
            </LayoutContainer>

            <FooterContainer>
                <Divider style={{ margin: 0 }} />
                <Footer />
            </FooterContainer>
        </LayoutWrapper>
    );
};
