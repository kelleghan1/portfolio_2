import { css } from 'styled-components'
import { TEXT1 } from '../../../utils/constants/colors'

export const NavMenuItemStyles = css`
  display: inline-block;
  padding-bottom: 3px;
  color: ${TEXT1};
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 2px solid ${TEXT1};
  }

  &.selected {
    border-bottom: 3px solid ${TEXT1};
  }
`
