import { useState } from 'react'
import TimerTitle from './titleTimer/components/TimerTitle'
import TimerSection from './sectionTimer/components/TimerSection'

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState<number>(0)
  return (
    <div>
      <TimerTitle
      totalSeconds={totalSeconds}
      setTotalSeconds={setTotalSeconds}
      />
      <TimerSection
      totalSeconds={totalSeconds}
      setTotalSeconds={setTotalSeconds}     
      />
      <TimerSection
      totalSeconds={totalSeconds}
      setTotalSeconds={setTotalSeconds}     
      />
    </div>
  )
}

export default Timer
