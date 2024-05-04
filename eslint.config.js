import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: true,
    typescript: true,
  },

  {
    rules: {
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-interfaces': 'off',
      'vinicunca/no-duplicate-string': 'off',
      'no-console': 'off',
      'no-template-curly-in-string': 'off',
      'vinicunca/no-nested-template-literals': 'off',
    },
  },
);
