import React, { FunctionComponent } from 'react'

interface PureUnitProps {
  pureClass: string
}

export const PureUnit: FunctionComponent<PureUnitProps> = ({ pureClass, children }) =>
  <div className={pureClass}>
    {children}
  </div>
