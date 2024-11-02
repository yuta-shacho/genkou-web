import { createTheme } from '@mui/material'

export function initTheme({ dark }: { dark: boolean }) {
  return createTheme({
    cssVariables: true,
    colorSchemes: { dark },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif, "Segoe UI Emoji"',
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '3rem',
        borderBottom: '1px var(--mui-palette-grey-300) solid',
      },
      h2: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        marginTop: '2rem',
        borderBottom: '1px var(--mui-palette-grey-300) solid',
      },
      h3: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        marginTop: '1.8rem',
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginTop: '1.6rem',
      },
      h5: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginTop: '1.6rem',
      },
      h6: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginTop: '1.6rem',
      },
    },
  })
}
