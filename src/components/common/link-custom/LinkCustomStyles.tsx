import { css } from 'styled-components'
import { GREY2, TEXT1 } from '../../../constants/Colors'

export const LinkCustomStyles = css`
  & > a {
    text-decoration: none;
    display: block;

    &:focus {
      outline: 1px dashed ${GREY2};
    }

    &:visited {
      color: ${TEXT1};
    }
  }
`