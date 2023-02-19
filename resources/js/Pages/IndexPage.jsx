import { MainLayout } from '@/Layouts/MainLayout';

export default function IndexPage({ test }) {
    console.log('@test', test);

    return (
        <MainLayout>
            123
        </MainLayout>
        // <div>123</div>
    );
}

