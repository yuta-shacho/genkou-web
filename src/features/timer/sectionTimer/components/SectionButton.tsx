import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import RestoreIcon from '@mui/icons-material/Restore'
import SettingsIcon from '@mui/icons-material/Settings'
import { IconButton } from '@mui/material'

interface SectionButtonProps {
  isActive: boolean
  toggleActive: () => void
  handleStart: () => void
  handleReset: () => void
  sectionTotalSeconds: number
  handleSet: () => void
}

function SectionButton({ isActive, toggleActive, handleStart, handleReset, sectionTotalSeconds, handleSet }: SectionButtonProps) {
  return (
    <>
      <IconButton onClick={handleSet}>
        <SettingsIcon />
      </IconButton>
      <IconButton onClick={isActive ? toggleActive : handleStart}>
        {isActive ? <PauseCircleIcon color="error" /> : <PlayCircleIcon color="primary" />}
      </IconButton>
      <IconButton onClick={handleReset} disabled={!isActive && sectionTotalSeconds === 0}>
        <RestoreIcon color="success" />
      </IconButton>
    </>
  )
}

export default SectionButton
