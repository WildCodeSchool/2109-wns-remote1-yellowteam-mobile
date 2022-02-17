module.exports = {
    env: {
        es6: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        "airbnb",
        "airbnb-typescript",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],

    parser: "@typescript-eslint/parser",

    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],

    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
