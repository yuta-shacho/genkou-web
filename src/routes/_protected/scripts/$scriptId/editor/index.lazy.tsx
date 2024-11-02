import { ScriptEditor } from '@/features/script-editor/components/script-editor'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/_protected/scripts/$scriptId/editor/',
)({
  component: Page,
})

function Page() {
  return (
    <ScriptEditor />
  )
}
