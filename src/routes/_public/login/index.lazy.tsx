import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/login/')({
  component: Page,
})

function Page() {
  return 'Hello /login/!'
}
