module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: ['standard', 'eslint:recommended', 'prettier', 'plugin:import/recommended', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin-prettier', 'eslint-plugin-import'],
    rules: {
        'import/no-unresolved': [
            'error',
            {
                ignore: ['aws-lambda'],
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['{tests,__tests__,mocks,__mocks__}/**/*.ts'],
                bundledDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        'no-tabs': ['off'],
        'no-mixed-spaces-and-tabs': ['off'],
        'no-undef': 'off',
        quotes: ['error', 'single'],
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
    },
};
