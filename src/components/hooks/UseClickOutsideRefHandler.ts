import { useEffect, RefObject } from 'react'

export const UseClickOutsideRefHandler = (
  ref: RefObject<HTMLElement>,
  outsideRefCallback: () => void
): void => {
  useEffect(
    () => {
      const handleClickOutside = (event: MouseEvent): void => {
        if (
          ref?.current &&
          event?.target instanceof HTMLElement &&
          !ref.current?.contains(event.target)
        ) {
          outsideRefCallback()
        }
      }

      document.addEventListener(
        'click',
        handleClickOutside
      )

      return () => {
        document.removeEventListener(
          'click',
          handleClickOutside
        )
      }
    },
    [
      ref,
      outsideRefCallback
    ]
  )
}
