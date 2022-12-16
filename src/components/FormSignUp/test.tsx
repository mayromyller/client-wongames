import { screen } from '@testing-library/react'

import FormSignUp from '.'
import { renderWithTheme } from 'utils/tests/helper'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Senha/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Confirmar senha/)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /criar conta/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
    expect(screen.getByText(/Já possuí uma conta\?/i)).toBeInTheDocument()
  })
})
