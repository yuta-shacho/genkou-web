import { Typography } from '@mui/material'

interface SectionCountdownProps {
  sectionTotalSeconds: number
}

function SectionCountdown({ sectionTotalSeconds }: SectionCountdownProps) {
  return (
    <Typography variant="body1" component="h1" sx={{ fontSize: '24px', fontWeight: '700' }}>
      {Math.floor(sectionTotalSeconds / 60)}
      :
      {sectionTotalSeconds % 60 < 10 ? `0${sectionTotalSeconds % 60}` : sectionTotalSeconds % 60}
    </Typography>
  )
}

export default SectionCountdown
