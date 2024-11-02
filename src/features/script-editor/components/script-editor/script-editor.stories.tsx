import type { Meta, StoryObj } from '@storybook/react'
import { ScriptEditor } from './script-editor'

const meta = {
  component: ScriptEditor,
} satisfies Meta<typeof ScriptEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
