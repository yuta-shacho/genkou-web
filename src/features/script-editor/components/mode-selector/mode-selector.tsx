import type { Mode } from '@/features/script-editor/types'
import type { FC } from 'react'
import { ModeEdit, Timer, Visibility } from '@mui/icons-material'
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'

export interface ModeSelectorProps {
  mode: Mode
  onSelect: (mode: Mode) => void
}

export const ModeSelector: FC<ModeSelectorProps> = ({ mode, onSelect }) => {
  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={(_, v: Mode) => onSelect(v)}
      size="small"
    >
      <Tooltip title="編集">
        <ToggleButton value="edit" aria-label="編集">
          <ModeEdit fontSize="small" />
        </ToggleButton>
      </Tooltip>
      <Tooltip title="タイマー">
        <ToggleButton value="timer" aria-label="タイマー">
          <Timer fontSize="small" />
        </ToggleButton>
      </Tooltip>
      <Tooltip title="プレビュー">
        <ToggleButton value="preview" aria-label="プレビュー">
          <Visibility fontSize="small" />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  )
}
