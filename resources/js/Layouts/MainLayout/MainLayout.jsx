import { Header } from '../Header';
import { Footer } from '../Footer';
import { Breadcrumb, Layout } from 'antd';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
`;

const BreadcrumWrapper = styled(Breadcrumb)`
    margin: 20px 0;
`;

export const MainLayout = ({ children }) => {
    return (
        <Layout style={{ backgroundColor: 'white' }}>
            <LayoutContainer>
                <Header />

                <Layout.Content>
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

                <Footer />
            </LayoutContainer>
        </Layout>
    );
};

// export const withLayout = (Component) => {
//     return (...props) => (
//         <MainLayout>
//             <Component {...props}/>
//         </MainLayout>
//     )
// }
