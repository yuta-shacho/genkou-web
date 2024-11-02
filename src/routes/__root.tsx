import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { lazy } from 'react'
import { initTheme } from '../shared/styles/theme'

// eslint-disable-next-line node/prefer-global/process
const isProduction = process.env.NODE_ENV === 'production'

const TanStackRouterDevtools = isProduction
  ? () => null
  : lazy(() => import('@tanstack/router-devtools').then(res => ({
    default: res.TanStackRouterDevtools,
  })))

const TanStackQueryDevtools = isProduction
  ? () => null
  : lazy(() => import('@tanstack/react-query-devtools').then(res => ({
    default: res.ReactQueryDevtools,
  })))

const theme = initTheme({ dark: true })
const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Outlet />
          <TanStackQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),

})
