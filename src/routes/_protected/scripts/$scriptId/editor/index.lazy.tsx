import { ScriptEditor } from '@/features/script-editor/components/script-editor'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/_protected/scripts/$scriptId/editor/',
)({
  component: Page,
})

function Page() {
  const { scriptId } = Route.useParams()
  return (
    <ScriptEditor>
      <Outlet />
    </ScriptEditor>
  )
}
