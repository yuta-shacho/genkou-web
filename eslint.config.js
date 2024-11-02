import antfu from '@antfu/eslint-config'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import storybook from 'eslint-plugin-storybook'

export default antfu(
  {
    ignores: [
      'dist',
      'src/routeTree.gen.ts',
      'src/generated',
    ],
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
  ...tanstackQuery.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'storybook/default-exports': 'off',
    },
  },
)
