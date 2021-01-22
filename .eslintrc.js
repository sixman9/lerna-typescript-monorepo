module.exports = {
  root: true,
  plugins: ['prettier', '@typescript-eslint', 'import', 'jest'],
  overrides: [
    {
      files: '*.js',
      extends: ['eslint-config-airbnb/base', 'prettier']
    },
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          './services/*/tsconfig.json',
          './libs/*/tsconfig.json'
        ]
      },
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'prettier'
      ]
    }
  ]
};