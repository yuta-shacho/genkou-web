import type { TimerIntervalOutput, TimerPublic } from '@/shared/api/types'
import type { Duration } from 'date-fns'
import { secondsToDuration } from '@/shared/utils'

export interface Timer {
  id: string
  timerInterval: TimerInterval
}

export interface TimerInterval {
  timer: Duration
  intervals: TimerInterval[]
}

export function rawTimerIntervalToTimerInterval(raw: TimerIntervalOutput): TimerInterval {
  return {
    timer: secondsToDuration(raw.timer),
    intervals: raw.intervals ? raw.intervals.map(rawTimerIntervalToTimerInterval) : [],
  }
}

export function rawTimerToTimer(raw: TimerPublic): Timer {
  return {
    id: raw._id,
    timerInterval: rawTimerIntervalToTimerInterval(raw.timer_interval),
  }
}
