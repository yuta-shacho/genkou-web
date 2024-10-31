import type { Preview } from '@storybook/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

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
        light:
          createTheme({
            cssVariables: true,
            colorSchemes: { dark: false },
          }),
        dark:
          createTheme({
            cssVariables: true,
            colorSchemes: { dark: true },
          }),
      },
      defaultTheme: 'light',
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
