module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    // "extends": "react-app"
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        // "plugin:import/recommended",
        'plugin:jsx-a11y/recommended',
        'eslint-config-prettier',
        'prettier',
    ],
    globals: {
        React: 'writable',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        'react/prop-types': 0,
    },
};
