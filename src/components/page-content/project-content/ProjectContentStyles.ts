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

  .loading-wrapper {
    position: relative;
    height: 100px;
    background-color: #fff;
  }

  .columns-wrapper {
    display: none;

    .block-description {
      display: none;
    }

    .single-image-tablet-columns {
      display: none;
    }

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

  .fade-in {
    animation: ${fadeIn} .3s forwards;
    animation-timing-function: linear;

    &.fade-out {
      animation: ${fadeOut} .2s forwards;
      animation-timing-function: linear;
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
