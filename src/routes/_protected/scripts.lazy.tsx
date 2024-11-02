import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/scripts')({
  component: Layout,
})

function Layout() {
  return (
    <>
      <h1>SCRIPTS LAYOUT</h1>
      <Outlet />
    </>
  )
}
