module.exports = {
    env: {
        browser: false,
        es2021: true
    },
    extends: ['airbnb-base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'no-console': 'off'
    }
}
