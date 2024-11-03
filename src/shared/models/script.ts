import type { ScriptPublic } from '@/generated/model'
import type { Duration } from 'date-fns'
import { secondsToDuration } from '@/shared/utils'
import { TZDate } from '@date-fns/tz'

export interface Script {
  id: string
  title: string
  content: string
  timer: Duration | null
  timerId: string
  createdAt: TZDate
  updatedAt: TZDate
}

export function rawScriptToScript(raw: ScriptPublic): Script {
  return {
    id: raw.id,
    title: raw.title,
    content: raw.content,
    timer: typeof raw.timer === 'number' ? secondsToDuration(raw.timer) : null,
    timerId: 'dummy', // TODO: バックエンドのAPIの更新を待機
    createdAt: new TZDate(raw.created_at, 'Asia/Tokyo'),
    updatedAt: new TZDate(raw.updated_at, 'Asia/Tokyo'),
  }
}
