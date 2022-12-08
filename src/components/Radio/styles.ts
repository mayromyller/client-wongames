import styled, { css } from 'styled-components'

import { RadioProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    transition: background border 0.1s ease-in-out;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      opacity: 0;
      position: absolute;
      transition: 0.1s ease-in-out;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`
