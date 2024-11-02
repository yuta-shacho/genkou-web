import { Container } from '@mui/material'
import { type FC, useEffect, useState } from 'react'
import { parseMarkdown } from '../../libs/parser'
import { NodesRenderer } from '../nodes-renderer'

export interface MarkdownProps {
  markdown: string
}

// TODO: useとSuspenseを使った実装に切り替える
export const Markdown: FC<MarkdownProps> = ({ markdown }) => {
  const [root, setRoot] = useState<Awaited<ReturnType<typeof parseMarkdown>>>()
  useEffect(() => {
    (async () => {
      const parsed = await parseMarkdown(markdown)
      setRoot(parsed)
    })()
  }, [markdown])
  if (!root)
    return <div></div>
  return (
    <Container maxWidth={false} sx={{ maxWidth: '48rem' }}>
      <NodesRenderer nodes={root.children} />
    </Container>
  )
}
