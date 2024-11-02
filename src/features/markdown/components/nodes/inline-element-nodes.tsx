import type { FC } from 'react'
import type { MarkdownNodeProps } from '../../types'
import {
  Link,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { NodesRenderer } from '../nodes-renderer'

export const TextNode: FC<{ text: string }> = ({ text }) => {
  return text
}

export const ParagraphNode: FC<MarkdownNodeProps<'paragraph'>> = ({ node }) => {
  return (
    <Typography sx={{ marginTop: '1.6rem' }}>
      <NodesRenderer nodes={node.children} />
    </Typography>
  )
}

export const EmphasisNode: FC<MarkdownNodeProps<'emphasis'>> = ({ node }) => {
  return (
    <Typography component="em">
      <NodesRenderer nodes={node.children} />
    </Typography>
  )
}

export const InlineCodeNode: FC<MarkdownNodeProps<'inlineCode'>> = ({ node }) => {
  return (
    <Typography
      component="code"
      sx={{
        padding: '0.2em 0.4em',
        fontSize: '0.8em',
        verticalAlign: '0.1em',
        borderRadius: '4px',
        background: grey['300'],
      }}
    >
      {node.value}
    </Typography>
  )
}

export const StrongNode: FC<MarkdownNodeProps<'strong'>> = ({ node }) => {
  return (
    <Typography component="strong" sx={{ fontWeight: 'bold' }}>
      <NodesRenderer nodes={node.children} />
    </Typography>
  )
}
export const DeleteNode: FC<MarkdownNodeProps<'delete'>> = ({ node }) => {
  return (
    <Typography component="del">
      <NodesRenderer nodes={node.children} />
    </Typography>
  )
}

export const LinkNode: FC<MarkdownNodeProps<'link'>> = ({ node }) => {
  return (
    <Link
      href={node.url}
      target={
        (node.url.startsWith('#')) ? '_self' : '_blank'
      }
      rel="noopenner"
      underline="always"
    >
      <NodesRenderer nodes={node.children} />
    </Link>
  )
}

export const BreakNode: FC<MarkdownNodeProps<'break'>> = () => {
  return <br />
}

export const FootnoteReferenceNode: FC<MarkdownNodeProps<'footnoteReference'>> = ({ node }) => {
  return (
    <sup>
      <Link href={`#${node.label}`} target="_self">
        {node.label}
      </Link>
    </sup>
  )
}
