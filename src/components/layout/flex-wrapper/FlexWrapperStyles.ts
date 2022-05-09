import { css } from 'styled-components'

interface FlexWrapperStylesPropsType {
  backgroundColor?: string
}

const renderBackgroundColor = ({ backgroundColor }: FlexWrapperStylesPropsType): string =>
  backgroundColor ? `background-color: ${backgroundColor};` : ''

export const FlexWrapperStyles = css<FlexWrapperStylesPropsType>`
  display: flex;

  &.flex-column {
    flex-direction: column;
  }

  ${renderBackgroundColor}
`
