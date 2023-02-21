import { Link } from '@inertiajs/react';
import { Button } from 'antd';

export function HeaderNotAuth() {
    return (
        <div>
            <Button type="link">
                <Link href={route('login')}>Войти</Link>
            </Button>
            <Button type="link">
                <Link href={route('register')}>Регистрация</Link>
            </Button>
        </div>
    );
}
