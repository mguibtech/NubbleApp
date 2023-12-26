module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}, {usePrettierrc: true}], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@+(routes|screens|components|hooks|theme)',
                group: 'internal',
                position: 'before',
              },
              {pattern: './', group: 'internal', position: 'before'},
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {order: 'asc', caseInsensitive: true},
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
