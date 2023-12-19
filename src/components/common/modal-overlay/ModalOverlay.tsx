import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Spacer } from '../../layout/spacer/Spacer'
import { TagH } from '../tag-h/TagH'
import { TagP } from '../tag-p/TagP'
import { ModalOverlayStyles } from './ModalOverlayStyles'

const ModalOverlayStyled = styled.div`${ModalOverlayStyles}`

export const ModalOverlay: FunctionComponent = () => {
  const [ counter, setCounter ] = useState(6)

  useEffect(
    () => {
      if (counter > 0) {
        setTimeout(
          () => { setCounter(counter - 1) },
          1000
        )
      } else {
        window.location.replace('https://kelldev.design')
      }
    },
    [ counter ]
  )
  return (
    <ModalOverlayStyled className='fade-in'>
      <div className='modal-container'>
        <Spacer
          b={0.5}
          t={0.5}
        >
          <TagH size={2}>
            Kelleghan Design
          </TagH>
        </Spacer>
        <Spacer
          b={0.5}
          t={0}
        >
          <TagP>
            is now
          </TagP>
        </Spacer>
        <Spacer
          b={3}
          t={0}
        >
          <TagH size={2}>
            Kelldev.Design
          </TagH>
        </Spacer>
        <Spacer
          b={0.5}
          t={0}
        >
          <TagP>
            Redirecting in:
          </TagP>
        </Spacer>
        <TagH size={2}>
          { counter }
        </TagH>
      </div>
    </ModalOverlayStyled>
  )
}
