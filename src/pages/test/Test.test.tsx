import { render } from '@testing-library/react'
import TestPage from '.'

describe('App', () => {
  test('Should render correctly', () => {
    render(<TestPage />)
    expect(document.querySelector('canvas')).toBeInTheDocument()
  })
})
