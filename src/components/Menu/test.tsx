import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helper'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })
})
