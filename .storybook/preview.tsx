import type { Preview } from '@storybook/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { initTheme } from '../src/shared/styles/theme'
import { storyRouterDecorator } from './TanStackRouter.mock'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => storyRouterDecorator(Story),
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
