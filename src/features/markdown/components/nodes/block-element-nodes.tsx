/* eslint-disable react/no-array-index-key */
import type { FC } from 'react'
import type { MarkdownNodeProps } from '../../types'
import {
  Box,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { NodesRenderer } from '../nodes-renderer'

export const HeadingNode: FC<MarkdownNodeProps<'heading'>> = ({ node }) => {
  const headings = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  } as const
  return (
    <Typography variant={headings[node.depth]}>
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
      loading="lazy"
      sx={{
        maxWidth: '100%',
        borderRadius: '0.6rem',
      }}
    />
  )
}

const StyledBlockQuote = styled('blockquote')({
  marginLeft: 0,
  margin: 0,
  paddingLeft: '1rem',
  color: grey[600],
  borderLeftWidth: '3px',
  borderLeftColor: grey[500],
  borderLeftStyle: 'solid',
})

export const BlockquoteNode: FC<MarkdownNodeProps<'blockquote'>> = ({ node }) => {
  return (
    <StyledBlockQuote>
      <NodesRenderer nodes={node.children} />
    </StyledBlockQuote>
  )
}

export const ThematicBreak: FC<MarkdownNodeProps<'thematicBreak'>> = () => {
  return <hr />
}

const MarkdownList = styled('ul')({
  paddingLeft: '1.6em',
})

const MarkdownOrderedList = styled('ol')({
  paddingLeft: '1.6em',
})

export const ListNode: FC<MarkdownNodeProps<'list'>> = ({ node }) => {
  return node.ordered
    ? (
        <MarkdownOrderedList>
          <NodesRenderer nodes={node.children} />
        </MarkdownOrderedList>
      )
    : (
        <MarkdownList>
          <NodesRenderer nodes={node.children} />
        </MarkdownList>
      )
}

const MarkdownListItem = styled('li')({
  marginTop: '0.5em',
})

export const ListItemNode: FC<MarkdownNodeProps<'listItem'>> = ({ node }) => {
  return (
    <MarkdownListItem>
      {
        node.children.map((child, index) => {
          if (child.type === 'paragraph')
            return <NodesRenderer key={index} nodes={child.children} />
          return <NodesRenderer key={index} nodes={[child]} />
        })
      }
    </MarkdownListItem>
  )
}

const StyledPre = styled('pre')({
  marginTop: '1.6rem',
})

export const CodeNode: FC<MarkdownNodeProps<'code'>> = ({ node }) => {
  return (
    <StyledPre>
      {node.value}
    </StyledPre>
  )
}

export const TableNode: FC<MarkdownNodeProps<'table'>> = ({ node }) => {
  const tableRowFirst = node.children.at(0)
  const tableRowRemain = node.children.slice(1)
  if (!tableRowFirst)
    return null
  return (
    <TableContainer component={Paper} sx={{ marginTop: '1.6rem' }}>
      <Table>
        <TableHead>
          <TableRow>
            {
              tableRowFirst.children.map((cell, index) => (
                <TableCell key={index} sx={{ fontWeight: 'bold' }}>
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
