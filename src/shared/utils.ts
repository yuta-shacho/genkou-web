import { addSeconds, type Duration, intervalToDuration } from 'date-fns'

export function secondsToDuration(seconds: number): Duration {
  const start = new Date(0)
  const end = addSeconds(start, seconds)
  return intervalToDuration({ start, end })
}
