import Link from 'next/link'

import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome"
        type="text"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm_password"
        placeholder="Confirmar senha"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Criar conta
      </Button>

      <FormLink>
        Já possuí uma conta?{' '}
        <Link href="/sign-in">
          <a> Entrar</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
