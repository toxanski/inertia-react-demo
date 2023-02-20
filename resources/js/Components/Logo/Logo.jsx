import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';
import { ReactComponent as LogoIcon } from './logo.svg';

const LogoLink = styled(Link)`
    display: inline-flex;
    align-items: center;
`;

const Logo = () => (
    <LogoLink href="/">
        <LogoIcon />
    </LogoLink>
);

export { Logo };
