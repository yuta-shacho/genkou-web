import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { lazy } from 'react'
import { initTheme } from '../shared/styles/theme'

const theme = initTheme({ dark: true })

// eslint-disable-next-line node/prefer-global/process
const TanStackRouterDevtools = process.env.NODE_ENV === 'production'
  ? () => null
  : lazy(() => import('@tanstack/router-devtools').then(res => ({
    default: res.TanStackRouterDevtools,
  })))

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),

})
