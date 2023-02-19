import { Link } from '@inertiajs/react';
import { ReactComponent as LogoIcon } from './logo.svg';

const Logo = () => (
    <Link href='/'>
        <LogoIcon/>
    </Link>
);

export { Logo };