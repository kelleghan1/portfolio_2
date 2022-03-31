import { css } from 'styled-components'
import { GREY2, LINK1, TEXT1 } from '../../../constants/Colors'

export const LinkCustomStyles = css`
  & > a {
    text-decoration: none;
    color: ${TEXT1};

    &:focus {
      outline: 1px dashed ${GREY2};
    }

    &:visited {
      color: ${TEXT1};
    }

    &.show-link-styling {
      color: ${LINK1};

      &:hover {
        text-decoration: underline;
      }
    }

    &.display-block {
      display: block;
    }
  }
`
