import antfu from '@antfu/eslint-config';
import perfectionist from 'eslint-plugin-perfectionist';

export default antfu({
  ignores: ['.next/*'],
  jsx: true,
  rules: {
    'import/order': 'off',
    ...perfectionist.configs['recommended-natural'].rules,
  },
  stylistic: {
    quotes: 'single',
    semi: true,
  },
  typescript: true,
});
