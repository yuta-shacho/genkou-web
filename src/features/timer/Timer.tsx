import { useState } from 'react'
import TimerSection from './sectionTimer/components/TimerSection'
import TimerTitle from './titleTimer/components/TimerTitle'

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
