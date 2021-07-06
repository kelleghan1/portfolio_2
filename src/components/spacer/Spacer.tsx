import React, { FunctionComponent, useCallback } from 'react'
import styled from 'styled-components'
import { SpacerStyles, SpacerStrings } from './SpacerStyles'
import {
  SPACING_X_NUM,
  SPACING_Y_NUM,
} from '../../constants/Spacings'
import { validateNumber } from '../../utils/helpers'

type SpacerProps = {
  l?: number,
  r?: number,
  t?: number,
  b?: number
}

const SpacerStyled = styled.div`${SpacerStyles}`

export const Spacer: FunctionComponent<SpacerProps> = ({
  children,
  l,
  r,
  t,
  b
}) => {
  const getSpacings = useCallback(
    () => {
      const spacings: SpacerStrings = {}

      if (validateNumber(l)) spacings.l = `${l as number * SPACING_X_NUM}px`
      if (validateNumber(r)) spacings.r = `${r as number * SPACING_X_NUM}px`
      if (validateNumber(t)) spacings.t = `${t as number * SPACING_Y_NUM}px`
      if (validateNumber(b)) spacings.b = `${b as number * SPACING_Y_NUM}px`

      return spacings
    },
    [
      t,
      b,
      b,
      r
    ]
  )

  return (
    <SpacerStyled {...getSpacings() }>
      {children}
    </SpacerStyled>
  )
}

