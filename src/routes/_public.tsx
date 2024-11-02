import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: Layout,
})

function Layout() {
  return <Outlet />
}
