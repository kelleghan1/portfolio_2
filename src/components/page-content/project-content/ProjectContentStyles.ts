import { css, keyframes } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX } from '../../../utils/constants/Breakpoints'
import { SPACING_Y } from '../../../utils/constants/Spacings'

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

    .block-description {
      display: none;
    }

    .single-image-tablet-columns {
      display: none;
    }
  }
  
  .list-wrapper {
    display: none;
  }

  .fade-in {
    animation: ${fadeIn} .3s forwards;
    animation-timing-function: linear;

    &.fade-out {
      animation: ${fadeOut} .25s forwards;
      animation-timing-function: linear;
    }
  }

  @media screen and (min-width: ${MEDIUM_MIN}) {
    .columns-wrapper {
      display: block;
    }
  }

  @media screen and (max-width: ${SMALL_MAX}) {
    .list-wrapper {
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    .columns-wrapper {
      .block-description {
        display: block;
      }

      .column-description {
        display: none;
      }

      .single-image-tablet-columns {
        display: block;
      }

      .single-image-desktop-columns {
        display: none;
      }
    }
  }
`
