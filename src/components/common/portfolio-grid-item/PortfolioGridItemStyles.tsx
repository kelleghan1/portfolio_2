import { css } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX, SMALL_MIN, XSMALL_MAX } from '../../../constants/Breakpoints'
import { GREY3 } from '../../../constants/Colors'
import { SPACING_Y_L } from '../../../constants/Spacings'

export const PortfolioGridItemStyles = css`
  @media screen and (min-width: ${MEDIUM_MIN}) {
    padding: 1%;
    flex: 0 0 calc(92% / 5);

    &:nth-child(5n - 4) {
      padding-left: 0px;
    }

    &:nth-child(5n) {
      padding-right: 0px;
    }
  }

  @media screen and (max-width: ${SMALL_MAX}) and (min-width: ${SMALL_MIN}) {
    padding: 1%;
    flex: 0 0 calc(94% / 4);

    &:nth-child(4n - 3) {
      padding-left: 0px;
    }

    &:nth-child(4n) {
      padding-right: 0px;
    }
  }

  @media screen and (max-width: ${XSMALL_MAX}) {
    padding: 0px 0px ${SPACING_Y_L} 0px;
    flex: 0 0 100%;
  }

  .image-wrapper {
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px ${GREY3};
      transition: all .2s ease;
      transform: scale(1.05, 1.05);
    }
  }
`
