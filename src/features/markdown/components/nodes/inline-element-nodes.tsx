import type { FC } from 'react'
import type { MarkdownNodeProps } from '../../types'
import {
  Link,
  Typography,
} from '@mui/material'
import { NodesRenderer } from '../nodes-renderer'

export const TextNode: FC<{ text: string }> = ({ text }) => {
  return text
}

export const ParagraphNode: FC<MarkdownNodeProps<'paragraph'>> = ({ node }) => {
  return (
    <Typography>
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
    <Typography component="code">
      {node.value}
    </Typography>
  )
}

export const StrongNode: FC<MarkdownNodeProps<'strong'>> = ({ node }) => {
  return (
    <Typography component="strong">
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
