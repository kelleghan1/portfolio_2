import { css, keyframes } from 'styled-components'

const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0; }
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`

interface ProjectImageStylesPropsType {
  aspectRatio?: number | null
}

const renderAspectRatioPadding = ({ aspectRatio }: ProjectImageStylesPropsType): string => {
  if (aspectRatio) return `padding-top: calc(100% * ${aspectRatio});`

  return ''
}

export const ProjectImageStyles = css<ProjectImageStylesPropsType>`
  &.fade-in {
    animation: ${fadeIn} .3s forwards;
    animation-timing-function: linear;

    &.fade-out {
      animation: ${fadeOut} .25s forwards;
      animation-timing-function: linear;
    }
  }

  .loading-wrapper {
    ${renderAspectRatioPadding}
    position: relative;
    background-color: #fff;
  }
`
