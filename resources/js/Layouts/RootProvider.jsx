import { ConfigProvider } from 'antd';
import { createContext, useContext } from 'react';

const initState = {
    styles: getComputedStyle(document.body),
};

export const RootContext = createContext(initState);

export function RootProvider({ children }) {
    const root = useContext(RootContext);

    return (
        <RootContext.Provider value={root}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary:
                            root.styles.getPropertyValue('--primary-color'),
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </RootContext.Provider>
    );
}
