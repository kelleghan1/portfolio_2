import { css } from 'styled-components'
import { TEXT1 } from '../../../constants/Colors'

export interface NavBarItemStylesType {
  selected: boolean
}

export const NavBarItemStyles = css<NavBarItemStylesType>`
  display: inline-block;
  padding-bottom: 3px;
  color: ${TEXT1};
  ${({ selected }) => selected ? `border-bottom: 3px solid ${TEXT1}` : 'border-bottom: 3px solid transparent'};
`
