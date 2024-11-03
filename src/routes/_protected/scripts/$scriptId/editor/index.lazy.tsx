import { ScriptEditor } from '@/features/script-editor/components/script-editor'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createLazyFileRoute(
  '/_protected/scripts/$scriptId/editor/',
)({
  component: Page,
})

function Page() {
  const { scriptId } = Route.useParams()
  return (
    <Suspense fallback="loading">
      <ScriptEditor scriptId={scriptId} />
    </Suspense>
  )
}
