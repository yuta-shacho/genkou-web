import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/scripts/$scriptId/edit/')(
  {
    component: Page,
  },
)

function Page() {
  const { scriptId } = Route.useParams()
  return <div>{`Editting: ${scriptId}`}</div>
}
