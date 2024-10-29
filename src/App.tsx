import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <a href="https://vite.dev" target="_blank">
            <Box
              component="img"
              src={viteLogo}
              alt="Vite logo"
              sx={{ height: 100, width: 100 }}
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <Box
              component="img"
              src={reactLogo}
              alt="React logo"
              sx={{ height: 100, width: 100 }}
            />
          </a>
        </Box>
        <Typography variant="h1">Vite + React</Typography>
        <Card>
          <CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => setCount(count => count + 1)}
                variant="contained"
              >
                count is
                {' '}
                {count}
              </Button>
            </CardActions>
            <Typography align="center">
              Edit
              {' '}
              <code>src/App.tsx</code>
              {' '}
              and save to test HMR
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography align="center">
        Click on the Vite and React logos to learn more
      </Typography>
    </Container>
  )
}

export default App
