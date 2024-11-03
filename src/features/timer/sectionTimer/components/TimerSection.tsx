import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import SectionButton from './SectionButton'
import SectionCountdown from './SectionCountdown'
import SectionInputField from './SectionInputField'

interface TimerSectionProps {
  totalSeconds: number
  setTotalSeconds: React.Dispatch<React.SetStateAction<number>>
}

function TimerSection({ totalSeconds, setTotalSeconds }: TimerSectionProps) {
  const [minutes, setMinutes] = useState<string>('0')
  const [seconds, setSeconds] = useState<string>('0')
  const [sectionTotalSeconds, setSectionTotalSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let id: NodeJS.Timeout | null = null
    if (isActive && sectionTotalSeconds > 0) {
      id = setInterval(() => {
        setSectionTotalSeconds(seconds => seconds - 1)
      }, 1000)
      setIntervalId(id)
    }
    else if (sectionTotalSeconds === 0 && isActive) {
      clearInterval(intervalId as NodeJS.Timeout)
      setIsActive(false)
    }
    return () => {
      if (id)
        clearInterval(id)
    }
  }, [isActive, sectionTotalSeconds])

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const handleSet = () => {
    const totalSec = Number.parseInt(minutes) * 60 + Number.parseInt(seconds)
    if (!Number.isNaN(totalSec) && totalSec >= 0) {
      if (totalSeconds !== 1 && totalSeconds >= totalSec) {
        setSectionTotalSeconds(totalSec)
        setErrorMessage(null)
        setTotalSeconds(totalSeconds - totalSec)
      }
      else {
        setErrorMessage('Please set Titletimer!')
      }
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
    setSectionTotalSeconds(Number.parseInt(minutes) * 60 + Number.parseInt(seconds))
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
      <SectionInputField
        minutes={minutes}
        seconds={seconds}
        handleMinutesChange={handleMinutesChange}
        handleSecondsChange={handleSecondsChange}
      />
      <SectionButton
        isActive={isActive}
        toggleActive={toggleActive}
        handleStart={handleStart}
        handleReset={handleReset}
        sectionTotalSeconds={sectionTotalSeconds}
        handleSet={handleSet}
      />
      <SectionCountdown
        sectionTotalSeconds={sectionTotalSeconds}
      />
    </Box>
  )
}

export default TimerSection
