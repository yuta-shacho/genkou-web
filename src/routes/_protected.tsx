import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  component: Layout,
})

function Layout() {
  return <Outlet />
}
