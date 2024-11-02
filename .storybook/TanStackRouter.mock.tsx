/* eslint-disable react-refresh/only-export-components */
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  type NotFoundRouteProps,
  RouterProvider,
  useRouterState,
} from '@tanstack/react-router'
import React, { createContext, type ReactNode, useContext } from 'react'

export const CurrentStoryContext = createContext<(() => ReactNode) | undefined>(undefined)

function RenderStory() {
  const storyFn = useContext(CurrentStoryContext)
  if (!storyFn) {
    throw new Error('Storybook root not found')
  }
  return storyFn()
}

function NotFoundComponent(_props: NotFoundRouteProps) {
  const state = useRouterState()
  return (
    <div>
      <i>Warning:</i>
      {' '}
      Simulated route not found for path
      <code>{state.location.href}</code>
    </div>
  )
}

const rootRoute = createRootRoute({
  notFoundComponent: NotFoundComponent,
})

const storyPath = '/__story__'
const storyRoute = createRoute({
  path: storyPath,
  getParentRoute: () => rootRoute,
  component: RenderStory,
})
rootRoute.addChildren([storyRoute])

export const storyRouter = createRouter({
  history: createMemoryHistory({ initialEntries: [storyPath] }),
  routeTree: rootRoute,
})

export function storyRouterDecorator(storyFn: () => ReactNode) {
  return (
    <CurrentStoryContext.Provider value={storyFn}>
      <RouterProvider router={storyRouter} />
    </CurrentStoryContext.Provider>
  )
}
