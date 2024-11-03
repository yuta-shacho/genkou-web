import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Button from './Button'
import Countdown from './Countdown'
import InputField from './InputField'

interface TimerTitleProps {
  totalSeconds: number
  setTotalSeconds: React.Dispatch<React.SetStateAction<number>>
}

function TimerTitle({ totalSeconds, setTotalSeconds }: TimerTitleProps) {
  const [minutes, setMinutes] = useState<string>('0')
  const [seconds, setSeconds] = useState<string>('0')
  const [isActive, setIsActive] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let id: NodeJS.Timeout | null = null
    if (isActive && totalSeconds > 0) {
      id = setInterval(() => {
        setTotalSeconds(seconds => seconds - 1)
      }, 1000)
      setIntervalId(id)
    }
    else if (totalSeconds === 0 && isActive) {
      clearInterval(intervalId as NodeJS.Timeout)
      setIsActive(false)
    }
    return () => {
      if (id)
        clearInterval(id)
    }
  }, [isActive, totalSeconds])

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const handleSet = () => {
    const totalSec = Number.parseInt(minutes) * 60 + Number.parseInt(seconds)
    if (!Number.isNaN(totalSec) && totalSec >= 0) {
      setTotalSeconds(totalSec)
      setErrorMessage(null)
    }
    else {
      setErrorMessage('Invalid time input!')
    }
  }

  const handleStart = () => {
    setIsActive(true)
  }

  const handleReset = () => {
    setIsActive(false)
    setTotalSeconds(Number.parseInt(minutes) * 60 + Number.parseInt(seconds))
  }

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value)
  }

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(e.target.value)
  }

  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>

      {errorMessage && <Box sx={{ color: 'red', marginTop: '20px' }}>{errorMessage}</Box>}
      <InputField
        minutes={minutes}
        seconds={seconds}
        handleMinutesChange={handleMinutesChange}
        handleSecondsChange={handleSecondsChange}
      />
      <Button
        isActive={isActive}
        toggleActive={toggleActive}
        handleStart={handleStart}
        handleReset={handleReset}
        totalSeconds={totalSeconds}
        handleSet={handleSet}
      />
      <Countdown
        totalSeconds={totalSeconds}
      />
    </Box>
  )
}

export default TimerTitle
