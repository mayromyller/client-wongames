import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number | undefined

export type RadioProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
  onCheck?: (value?: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  value,
  ...rest
}: RadioProps) => {
  function onChange() {
    if (onCheck) {
      onCheck(value)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={labelFor}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
