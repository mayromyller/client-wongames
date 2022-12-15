import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helper'

import Auth from '.'

describe('<Auth />', () => {
  it('should render logos, title, subtitle and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    const logos = screen.getAllByLabelText(/won games/i)

    expect(logos[0]).toBeInTheDocument()
    expect(logos[1]).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /a won é a melhor e mais completa plataforma de games/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Auth title/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
