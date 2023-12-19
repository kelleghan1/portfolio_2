import { css } from 'styled-components'
import { SPACING_X_L, SPACING_Y_L } from '../../../utils/constants/spacings'
import { animationFadeIn } from '../../../utils/constants/styles'

export const ModalOverlayStyles = css`
  &.fade-in {
    ${animationFadeIn}
  }

  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  align-items: center;

  .modal-container {
    background-color: #fff;
    box-shadow: 0px 0px 10px #888888;
    width: 400px;
    border-radius: 5px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${SPACING_Y_L} ${SPACING_X_L};
    justify-content: center;
    align-items: center;
  }
`
