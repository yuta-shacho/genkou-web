import type { Meta, StoryObj } from '@storybook/react'
import { Markdown } from './markdown'

const meta = {
  component: Markdown,
} satisfies Meta<typeof Markdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    rawMarkdownText:
      `# h1
## h2
### h3
#### h4
##### h5
###### h6

通常
*斜体*
**強調**
***斜体強調***
~~打ち消し~~
\`inline code\`
[example.com](https://example.com)

*インライン*で[リンク](https://example.com)や\`コード\`、**修飾**が~~動作~~機能するかの***確認***

脚注のテスト[^1]

[^1]: 脚注の内容

[![React kawaii logo](https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/React/React.png)](https://github.com/SAWARATSUKI/KawaiiLogos/blob/main/React/React.png)

> 引用された文章

- 要素1
- 要素2
- 要素3
- 要素4 
  - 要素4-1
    - 要素4-1-1

1. 要素1
2. 要素2
3. 要素3
4. 要素4

| a   | b   | c   |
| --- | --- | --- |
| aaa | bbb | ccc |

\`\`\`ts
function main() {
  console.log('Hello, world!')
}
\`\`\`
`,
  },
}
