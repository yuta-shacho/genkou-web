import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'
import { fn } from '@storybook/test'
import { EditableText } from './editable-text'

const meta = {
  component: EditableText,
  args: {
    save: fn(),
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EditableText>

export default meta
type Story = StoryObj<typeof meta>

export const Overflow: Story = {
  args: {
    initial: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  },
  decorators: [
    Story => <Box sx={{ maxWidth: '100px' }}><Story /></Box>,
  ],
}
