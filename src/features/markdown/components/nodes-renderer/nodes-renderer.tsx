/* eslint-disable react/no-array-index-key */
import type { RootContent } from 'mdast'
import type { FC } from 'react'
import { MarkdownParserError } from '../../types'
import {
  BlockquoteNode,
  BreakNode,
  CodeNode,
  DeleteNode,
  EmphasisNode,
  FootnoteReferenceNode,
  HeadingNode,
  ImageNode,
  InlineCodeNode,
  LinkNode,
  ListItemNode,
  ListNode,
  ParagraphNode,
  StrongNode,
  TableNode,
  TextNode,
  ThematicBreak,
} from '../nodes'

export interface NodesRendererProps {
  nodes: RootContent[]
}

export const NodesRenderer: FC<NodesRendererProps> = ({ nodes }) => {
  return nodes.map((node, index) => {
    const nodeType = node.type
    switch (nodeType) {
      // 生テキスト
      case 'text':
        return <TextNode key={index} text={node.value} />

      // インライン要素
      case 'paragraph':
        return <ParagraphNode key={index} node={node} />
      case 'emphasis':
        return <EmphasisNode key={index} node={node} />
      case 'inlineCode':
        return <InlineCodeNode key={index} node={node} />
      case 'strong':
        return <StrongNode key={index} node={node} />
      case 'delete':
        return <DeleteNode key={index} node={node} />
      case 'link':
        return <LinkNode key={index} node={node} />
      case 'break':
        return <BreakNode key={index} node={node} />
      case 'footnoteReference':
        return <FootnoteReferenceNode key={index} node={node} />

      // ブロック要素
      case 'heading':
        return <HeadingNode key={index} node={node} />
      case 'image':
        return <ImageNode key={index} node={node} />
      case 'blockquote':
        return <BlockquoteNode key={index} node={node} />
      case 'thematicBreak':
        return <ThematicBreak key={index} node={node} />
      case 'list':
        return <ListNode key={index} node={node} />
      case 'listItem':
        return <ListItemNode key={index} node={node} />
      case 'table':
        return <TableNode key={index} node={node} />
      case 'code':
        return <CodeNode key={index} node={node} />

      case 'footnoteDefinition':
        return null

      case 'html':
      case 'yaml':
        return <TextNode key={index} text={node.value} />

      case 'imageReference':
      case 'definition':
      case 'linkReference':
      {
        const start = node.position?.start
        const end = node.position?.end
        throw new MarkdownParserError(`未実装: ${node.type}`, {
          cause: {
            start,
            end,
          },
        })
      }

      case 'tableRow':
      case 'tableCell':
      case 'mdxJsxFlowElement':
      case 'mdxJsxTextElement':
      {
        const start = node.position?.start
        const end = node.position?.end
        throw new MarkdownParserError(`到達不可能: ${node.type}`, {
          cause: {
            start,
            end,
          },
        })
      }
      default:
        return nodeType satisfies never
    }
  })
}
