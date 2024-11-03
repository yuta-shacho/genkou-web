import type { Meta, StoryObj } from '@storybook/react'
import { secondsToDuration } from '@/shared/utils'
import { TZDate } from '@date-fns/tz'
import { ScriptEditorPresentational } from './presentational'

const meta = {
  component: ScriptEditorPresentational,
} satisfies Meta<typeof ScriptEditorPresentational>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 'example',
    title: 'TITLE',
    content: `# h1`,
    timer: secondsToDuration(15 * 60),
    timerId: 'example-timer',
    createdAt: new TZDate(),
    updatedAt: new TZDate(),
  },
}
