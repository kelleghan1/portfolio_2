import { css } from 'styled-components'
import { MEDIUM_MIN, SMALL_MAX } from '../../../constants/Breakpoints'
import { SPACING_Y } from '../../../constants/Spacings'

export const ProjectContentStyles = css`
  .description-wrapper {
    background-color: #fff;
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
`