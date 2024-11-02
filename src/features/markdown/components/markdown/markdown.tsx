import { Container } from '@mui/material'
import { type FC, useEffect, useState } from 'react'
import { parseMarkdown } from '../../libs/parser'
import { NodesRenderer } from '../nodes-renderer'

export interface MarkdownProps {
  rawMarkdownText: string
}

// TODO: useとSuspenseを使った実装に切り替える
export const Markdown: FC<MarkdownProps> = ({ rawMarkdownText }) => {
  const [root, setRoot] = useState<Awaited<ReturnType<typeof parseMarkdown>>>()
  useEffect(() => {
    (async () => {
      const parsed = await parseMarkdown(rawMarkdownText)
      setRoot(parsed)
    })()
  }, [rawMarkdownText])
  if (!root)
    return <div></div>
  return (
    <Container maxWidth="md">
      <NodesRenderer nodes={root.children} />
    </Container>
  )
}
