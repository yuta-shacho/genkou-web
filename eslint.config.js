import antfu from '@antfu/eslint-config'
import storybook from 'eslint-plugin-storybook'

export default antfu(
  {
    ignores: ['dist'],
    formatters: true,
    react: true,
    markdown: false,
    jsonc: false,
  },
  {
    rules: {
      'react-dom/no-unsafe-target-blank': 'off',
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'storybook/default-exports': 'off',
    },
  },
)