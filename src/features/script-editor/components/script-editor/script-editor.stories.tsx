import type { Meta, StoryObj } from '@storybook/react'
import { styled } from '@mui/material'
import { ScriptEditor } from './script-editor'

const meta = {
  title: 'script/layout',
  component: ScriptEditor,
} satisfies Meta<typeof ScriptEditor>

export default meta
type Story = StoryObj<typeof meta>

const Children = styled('div')({
  display: 'grid',
  placeContent: 'center',
  height: '300vh',
})

export const Primary: Story = {
  args: {
    children: <Children>EXAMPLE</Children>,
  },
}
