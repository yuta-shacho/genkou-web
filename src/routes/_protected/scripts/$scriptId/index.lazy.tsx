import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/scripts/$scriptId/')({
  component: Page,
})

function Page() {
  const { scriptId } = Route.useParams()
  return <div>{`Preview: ${scriptId}`}</div>
}
