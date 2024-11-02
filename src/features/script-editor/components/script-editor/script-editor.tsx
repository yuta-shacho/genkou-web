import type { Mode } from '@/features/script-editor/types'
import { ModeSelector } from '@/features/script-editor/components/mode-selector'
import { Save } from '@mui/icons-material'
import { Box, Button, Grid2 as Grid, Toolbar } from '@mui/material'
import { type FC, lazy, type ReactNode, Suspense, useState } from 'react'

const Markdown = lazy(() => import('@/features/markdown/components/markdown').then(module => ({ default: module.Markdown })))
const Editor = lazy(() => import('@/features/editor/component/Editor'))

export interface ScriptEditorProps {
  children: ReactNode
}

export const ScriptEditor: FC<ScriptEditorProps> = ({ children }) => {
  const [markdown, setMarkdown] = useState<string>('')
  const [mode, setMode] = useState<Mode>('edit')
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'scroll',
    }}
    >
      <Toolbar sx={{
        position: 'sticky',
        top: 0,
        justifyContent: 'space-between',
        background: 'background',
      }}
      >
        <Grid container sx={{ width: '100%' }}>
          <Grid>
            <ModeSelector mode={mode} onSelect={mode => setMode(mode)} />
          </Grid>
          <Grid container size="grow" sx={{ placeContent: 'center' }}>
            <div>
              TITLE
            </div>
          </Grid>
          <Grid>
            <Button variant="contained" sx={{ display: 'flex', gap: 0.5 }}>
              <Save fontSize="small" />
              保存
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Suspense>
          {(() => {
            switch (mode) {
              case 'edit':
                return <Editor markdown={markdown} setMarkdown={setMarkdown} />
              case 'timer':
                return <Markdown markdown={markdown} />
              case 'preview':
                return <Markdown markdown={markdown} />
              default:
                return mode satisfies never
            }
          })()}
        </Suspense>
      </Box>
      {children}
    </Box>
  )
}
