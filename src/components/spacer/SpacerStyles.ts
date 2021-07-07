import { css } from 'styled-components'
import {
  SPACING_X,
  SPACING_Y
} from '../../constants/Spacings'

export type SpacerStrings = {
  b?: string,
  l?: string,
  r?: string,
  t?: string
}

export const SpacerStyles = css<SpacerStrings>`
  ${({ t, r, b, l }) => (`
    padding-bottom: ${b || SPACING_Y};
    padding-left: ${l || SPACING_X};
    padding-right: ${r || SPACING_X};
    padding-top: ${t || SPACING_Y};
  `)}
`