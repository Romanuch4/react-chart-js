import { compose } from 'shared/helpers/compose'
import { withRouter } from './with-router'

type ComponentFn = () => JSX.Element

export const withProviders = (App: ComponentFn) =>
  compose<ComponentFn>(App)(withRouter) as ComponentFn
