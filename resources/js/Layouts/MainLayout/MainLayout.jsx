import { Header } from '../Header';
import { Footer } from '../Footer';
import { Breadcrumb, Layout, Divider } from 'antd';
import styled from '@emotion/styled';
// import { useContext } from 'react';
// import { RootContext } from '@/Layouts/RootProvider';

const LayoutWrapper = styled(Layout)`
    background-color: var(--bg-color);
    min-height: 100vh;
`;

export const LayoutContainer = styled.div`
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
`;

const FooterContainer = styled(LayoutContainer)`
    margin-top: auto;
`;

const BreadcrumWrapper = styled(Breadcrumb)`
    margin: 20px 0;
`;

export const MainLayout = ({ children }) => {
    // const { styles } = useContext(RootContext);

    return (
        <LayoutWrapper>
            <LayoutContainer>
                <Header />
            </LayoutContainer>

            <LayoutContainer>
                <Divider style={{ margin: 0 }} />
            </LayoutContainer>

            <LayoutContainer>
                <Layout.Content style={{ minHeight: '100%' }}>
                    <BreadcrumWrapper>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </BreadcrumWrapper>

                    <div
                        className="site-layout-content"
                        style={{ height: '100%' }}
                    >
                        {children}
                    </div>
                </Layout.Content>
            </LayoutContainer>

            <FooterContainer>
                <Divider style={{ margin: 0 }} />
                <Footer />
            </FooterContainer>
        </LayoutWrapper>
    );
};

// export const withLayout = (Component) => {
//     return (...props) => (
//         <MainLayout>
//             <Component {...props}/>
//         </MainLayout>
//     )
// }
