import { SyntheticEvent } from 'react'

export type HandleNavigationFunctionType = (
  currentPathName: string,
  event: SyntheticEvent,
  to: string
) => number

export interface TrueMapType { [key: string]: true }
