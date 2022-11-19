import { lazy } from 'react'
import { Route } from 'wouter'

const TestPage = lazy(() => import('./test'))

export const Routing = () => {
  return (
    <>
      <Route path='/test' component={TestPage} />
    </>
  )
}
