import { css } from 'styled-components'
import { TEXT1 } from '../../../constants/Colors'

export const NavMenuItemStyles = css`
  display: inline-block;
  padding-bottom: 3px;
  color: ${TEXT1};
  border-bottom: 3px solid transparent;

  &.selected {
    border-bottom: 3px solid ${TEXT1};
  }
`
