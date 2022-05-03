import { SyntheticEvent } from 'react'

export type HandleNavigationFunctionType = (
  currentPathName: string,
  event: SyntheticEvent,
  to: string
) => number

export type ImageLoadCallbackType = (imageUrl: string) => void

export interface TrueMapType { [key: string]: true }
