import { SyntheticEvent } from 'react'

export type HandleNavigationFunctionType = (
  currentPathName: string | undefined,
  event: SyntheticEvent,
  to: string
) => number

