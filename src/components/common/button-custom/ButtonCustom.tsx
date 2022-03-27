import React, { FunctionComponent, ReactEventHandler } from 'react'
import styled from 'styled-components'
import { ButtonCustomStyles } from './ButtonCustomStyles'

const ButtonCustomStyled = styled.button`${ButtonCustomStyles}`

interface ButtonCustomPropsType {
  onClick: ReactEventHandler
  title: string
}

export const ButtonCustom: FunctionComponent<ButtonCustomPropsType> = ({
  children,
  onClick,
  title
}) =>
  <ButtonCustomStyled
    onClick={onClick}
    title={title}
  >
    { children }
  </ButtonCustomStyled>
