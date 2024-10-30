import type { RootContentMap } from 'mdast'

export interface MarkdownNodeProps<NodeType extends keyof RootContentMap> {
  node: RootContentMap[NodeType]
}

export class MarkdownParserError extends Error {
  // @ts-expect-error エラーハンドリングのために必要
  readonly #className = 'MarkdownParserError'
}
