import { Header } from '../Header';
import { Footer } from '../Footer';
import { Breadcrumb, Layout } from 'antd';

export const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Header />

            <Layout.Content
            // style={{
            // padding: '0 50px',
            // }}
            >
                <Breadcrumb
                // style={{
                //     margin: '16px 0',
                // }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <div
                    className="site-layout-content"
                    // style={{
                    //     background: '#936969'
                    // }}
                >
                    {children}
                </div>
            </Layout.Content>

            <Footer />
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
