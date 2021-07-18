import React, { FunctionComponent } from 'react'

type PureUnitProps = {
  pureClass: string
}

export const PureUnit: FunctionComponent<PureUnitProps> = ({ pureClass, children }) =>
  <div className={pureClass}>
    {children}
  </div>
