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
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
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
        'no-tabs': ['error'], // check no-tabs rule config to allow tabes in comments ?
        'no-mixed-spaces-and-tabs': ['error'],
        'no-undef': 'error',
        quotes: ['error', 'single'],
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
    },
};
