module.exports = {
  extends: [require.resolve('@kurocado-studio/style-guide/eslint/node')],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
      alias: {
        map: [['~', './src']],
        extensions: ['.ts'],
      },
      typescript: {
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/__tests__/**/*.ts',
        '**/__tests__/**/*.tsx',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        'import/order': 'off',
      },
    },
  ],
};
