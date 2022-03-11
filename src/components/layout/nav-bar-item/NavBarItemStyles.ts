import { css } from 'styled-components'
import { TEXT1 } from '../../../constants/Colors'
import { SPACING_X_L } from '../../../constants/Spacings'

export type NavBarItemStylesType = {
  selected: boolean
}

export const NavBarItemStyles = css<NavBarItemStylesType>`
  margin-left: ${SPACING_X_L};
  display: inline-block;
  padding-bottom: 3px;
  color: ${TEXT1};
  ${({ selected }) => selected ? `border-bottom: 3px solid ${TEXT1}` : ''};
`