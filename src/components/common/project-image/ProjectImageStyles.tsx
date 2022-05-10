import { css } from 'styled-components'
import { keyframeFadeIn, keyframeFadeOut } from '../../../utils/constants/styles'

interface ProjectImageStylesPropsType {
  aspectRatio?: string | null
}

const renderAspectRatioPadding = ({ aspectRatio }: ProjectImageStylesPropsType): string => {
  if (aspectRatio) return `padding-top: calc(100% * (${aspectRatio}));`

  return ''
}

export const ProjectImageStyles = css<ProjectImageStylesPropsType>`
  .relative-wrapper {
    position: relative;
    background-color: #fff;

    .image-wrapper {
      opacity: 0;
    }
  }

  .fade-in {
    animation: ${keyframeFadeIn} .3s forwards;
    animation-timing-function: linear;

    &.fade-out {
      animation: ${keyframeFadeOut} .25s forwards;
      animation-timing-function: linear;
    }
  }

  .loading-wrapper {
    ${renderAspectRatioPadding}
    position: relative;
    background-color: #fff;
  }
`
