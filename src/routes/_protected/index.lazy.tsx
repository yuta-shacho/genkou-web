import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/')({
  component: Page,
})

function Page() {
  return (
    <div>
      <h1>TOP PAGE</h1>
    </div>
  )
}
