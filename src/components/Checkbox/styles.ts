import styled, { css } from 'styled-components'

import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
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
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2.rem;
    transition: background border 0.1s ease-in-out;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      transition: 0.1s ease-in-out;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`
