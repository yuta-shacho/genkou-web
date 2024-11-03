import type { FC } from 'react'
import MDEditor, { commands } from '@uiw/react-md-editor'

export interface EditorProps {
  markdown: string
  setMarkdown: (markdown: string) => void
}

const Editor: FC<EditorProps> = ({ markdown, setMarkdown }) => {
  const customCommands = [
    commands.bold,
    commands.italic,
    commands.strikethrough,
    commands.link,
    commands.image,
    commands.group(
      [
        commands.title1,
        commands.title2,
        commands.title3,
        commands.title4,
        commands.title5,
        commands.title6,
      ],
      {
        name: 'title',
        groupName: 'title',
        buttonProps: { 'aria-label': 'Insert title' },
      },
    ),
  ]
  return (
    <MDEditor
      value={markdown}
      height="100%"
      fullscreen
      onChange={(val) => {
        setMarkdown(val!)
      }}
      enableScroll
      commands={customCommands}
      extraCommands={[]}
      preview="edit"
      style={{
        position: 'initial',
      }}
    />
  )
}

export default Editor
