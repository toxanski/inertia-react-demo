import { useEffect, useState } from 'react';
import { Switch, Typography } from 'antd';

export function ThemeToggler() {
    const [theme, setTheme] = useState('light');
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        console.log('>> theme', theme);
        document.body.dataset.theme = theme;
    }, [theme]);

    const switchHandleTheme = () => {
        setTheme(nextTheme);
    };

    return (
        <>
            {/* TODO: переключение --primary-color не происходит, т.к. эта css-var у ant-design. 
                Стоит использовать свои css-variables в будущих компонентах
            */}

            <Switch onChange={switchHandleTheme} />
            <Typography.Title level={5}>Текущая тема: {theme}</Typography.Title>
        </>
    );
}
