/* eslint-disable react/no-array-index-key */
import type { FC } from 'react'
import type { MarkdownNodeProps } from '../../types'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { NodesRenderer } from '../nodes-renderer'

export const HeadingNode: FC<MarkdownNodeProps<'heading'>> = ({ node }) => {
  const heading = () => {
    const depth = node.depth
    switch (depth) {
      case 1:
        return 'h1'
      case 2:
        return 'h2'
      case 3:
        return 'h3'
      case 4:
        return 'h4'
      case 5:
        return 'h5'
      case 6:
        return 'h6'
      default:
        return depth satisfies never
    }
  }
  return (
    <Typography component={heading()}>
      <NodesRenderer nodes={node.children} />
    </Typography>
  )
}

export const ImageNode: FC<MarkdownNodeProps<'image'>> = ({ node }) => {
  return (
    <Box
      component="img"
      alt={node.alt ?? ''}
      src={node.url}
    />
  )
}

export const BlockquoteNode: FC<MarkdownNodeProps<'blockquote'>> = ({ node }) => {
  return (
    <blockquote>
      <NodesRenderer nodes={node.children} />
    </blockquote>
  )
}

export const ThematicBreak: FC<MarkdownNodeProps<'thematicBreak'>> = () => {
  return <hr />
}

export const ListNode: FC<MarkdownNodeProps<'list'>> = ({ node }) => {
  return node.ordered
    ? (
        <ol>
          <NodesRenderer nodes={node.children} />
        </ol>
      )
    : (
        <ul>
          <NodesRenderer nodes={node.children} />
        </ul>
      )
}

export const ListItemNode: FC<MarkdownNodeProps<'listItem'>> = ({ node }) => {
  return (
    <li>
      {
        node.children.map((child, index) => {
          if (child.type === 'paragraph')
            return <NodesRenderer key={index} nodes={child.children} />
          return <NodesRenderer key={index} nodes={[child]} />
        })
      }
    </li>
  )
}

export const CodeNode: FC<MarkdownNodeProps<'code'>> = ({ node }) => {
  return (
    <pre>
      {node.value}
    </pre>
  )
}

export const TableNode: FC<MarkdownNodeProps<'table'>> = ({ node }) => {
  const tableRowFirst = node.children.at(0)
  const tableRowRemain = node.children.slice(1)
  if (!tableRowFirst)
    return null
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {
              tableRowFirst.children.map((cell, index) => (
                <TableCell key={index}>
                  <NodesRenderer nodes={cell.children} />
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableRowRemain.map((row, index) => (
              <TableRow key={index}>
                {
                  row.children.map((cell, index) => (
                    <TableCell key={index}>
                      <NodesRenderer nodes={cell.children} />
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
