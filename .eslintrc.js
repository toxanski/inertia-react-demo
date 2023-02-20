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
        // magic метод inertia.js в глобальном скоупе
        route: 'readonly',
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
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                // массив своих кастомных label-компонентов
                labelComponents: [''],
                labelAttributes: ['label'],
                // массив своих кастомных контролов (input, radio...)
                controlComponents: ['Checkbox'],
                depth: 3,
            },
        ],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
    },
};
