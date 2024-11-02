import type { Root } from 'mdast'
import { remark } from 'remark'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

const remarkParser = remark()
  .use(remarkGfm)
  .use(remarkBreaks)

export async function parseMarkdown(rawMarkdown: string): Promise<Root> {
  const parsed = remarkParser.parse(rawMarkdown)
  const mdastRoot = await remarkParser.run(parsed)
  return mdastRoot as Root
}
