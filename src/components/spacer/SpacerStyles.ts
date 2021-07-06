import { css } from 'styled-components'
import {
  SPACING_X,
  SPACING_Y
} from '../../constants/Spacings'

export type SpacerStrings = {
  l?: string,
  r?: string,
  t?: string,
  b?: string
}

export const SpacerStyles = css<SpacerStrings>`
  ${({ t, r, b, l }) => (`
    padding-top: ${t || SPACING_Y};
    padding-bottom: ${b || SPACING_Y};
    padding-left: ${l || SPACING_X};
    padding-right: ${r || SPACING_X};
  `)}
`