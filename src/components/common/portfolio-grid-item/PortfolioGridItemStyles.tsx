import { css } from 'styled-components'

export const PortfolioGridItemStyles = css`
  flex: 1 0 calc(92% / 5);
  padding: 1%;

  &:nth-child(5n - 4) {
    padding-left: 0px;
  }

  &:nth-child(5n) {
    padding-right: 0px;
  }

  .image-wrapper {
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px #888888;
      transition: all .2s ease;
      transform: scale(1.05, 1.05);
    }
  }
`