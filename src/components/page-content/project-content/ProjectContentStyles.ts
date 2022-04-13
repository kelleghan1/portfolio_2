import { css, keyframes } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX } from '../../../constants/Breakpoints'
import { SPACING_Y } from '../../../constants/Spacings'

const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0; }
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

export const ProjectContentStyles = css`
  .description-wrapper {
    background-color: #fff;

    .link-item-wrapper {
      display: inline-block;
    }
  }

  .name-wrapper {
    margin-bottom: ${SPACING_Y};
  }

  .products-wrapper {
    margin-bottom: ${SPACING_Y};
  }

  .columns-wrapper {
    display: none;

    @media screen and (min-width: ${MEDIUM_MIN}) {
      display: block;
    }
  }
  
  .list-wrapper {
    display: none;

    @media screen and (max-width: ${SMALL_MAX}) {
      display: block;
    }
  }

  .columns-wrapper,
  .list-wrapper {
    animation: ${fadeIn} .25s forwards;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);

    &.fade-out {
      animation: ${fadeOut} .2s forwards;
      animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    }
  }
`
