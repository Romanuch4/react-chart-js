import { screen, render } from '@testing-library/react'
import TestPage from '.'

describe('App', () => {
  test('Should render correctly', () => {
    render(<TestPage />)
    expect(screen.getByText('Test Page')).toBeInTheDocument()
  })
})
