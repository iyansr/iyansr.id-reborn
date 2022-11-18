module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  globals: {
    React: 'readonly',
    NodeJS: true,
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              ['^react', '^@?\\w'], // Packages `react` related packages come first.
              ['(?!.*schemas)^@(modules)(/.*|$)'], // Internal packages (without schema).
              ['^\\u0000'], // Side effect imports.
              ['^\\.', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^.*schemas.*$'], // Schema, parent imports. Put `..` last.
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.?(css)$'], // Style imports.
            ],
          },
        ],
      },
    },
  ],
};
