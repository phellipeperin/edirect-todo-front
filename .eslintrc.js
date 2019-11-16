module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [2, 4],
        'vue/html-indent': [2, 4],
        'vue/script-indent': [2, 4, {
            baseIndent: 1,
        }],
        'no-underscore-dangle': 0,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    plugins: [
        'html',
    ],
};
