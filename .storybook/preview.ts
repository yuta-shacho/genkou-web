import type { Preview } from '@storybook/react'
import { CssBaseline, type Theme, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { initTheme } from '../src/shared/styles/theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: initTheme({ dark: false }),
        dark: initTheme({ dark: true }),
      },
      defaultTheme: 'light',
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
