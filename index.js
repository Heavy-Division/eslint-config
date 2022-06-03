module.exports = {
    extends: 'airbnb',
    plugins: ['@typescript-eslint', 'react-hooks'],
    // Overrides airbnb, use sparingly
    rules: {
        'arrow-parens': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'class-methods-use-this': 'off',
        'curly': ['error', 'multi-line'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-indent': ['error', 4],
        'no-restricted-syntax': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'strict': ['error', 'global'],

        // object literals
        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'object-shorthand': ['error'],

        'no-case-declarations': 'off',

        // just... why
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-continue': 'off',
        'radix': 'off',

        // Avoid typescript-eslint conflicts
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
        }],

        'no-use-before-define': 'off',

        'react/jsx-indent-props': 'off',

        // not relevant now
        'react/no-unused-state': 'off',

        // useless
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unescaped-entities': 'off',

        // react
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'on|handle',
            eventHandlerPropPrefix: 'on',
            checkLocalVariables: true,
        }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Not needed with react 17+
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'import/extensions': 'off',
        'no-param-reassign': 'off',
        'no-undef-init': 'off',
        'max-len': ['error', { code: 192 }],
    },
};
