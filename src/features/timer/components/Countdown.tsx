import { Typography } from '@mui/material'

interface CountdownProps {
    totalSeconds: number
}

const Countdown = ({totalSeconds}: CountdownProps) => {
  return (
    <>
     <Typography variant="body1" component="h1" sx={{fontSize: "24px", fontWeight: "700"}}>
        {Math.floor(totalSeconds / 60)}:
        {totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60}
        </Typography>
    </>
  )
}

export default Countdown