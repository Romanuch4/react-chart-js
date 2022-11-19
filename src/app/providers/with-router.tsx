import { Suspense } from 'react'
import { Router } from 'wouter'

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <Router>
      <Suspense fallback='Loading...'>{component()}</Suspense>
    </Router>
  )
