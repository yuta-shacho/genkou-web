import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/settings/')({
  component: Page,
})

function Page() {
  return 'Hello /settings/user!'
}
