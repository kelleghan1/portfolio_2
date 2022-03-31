import React, {
  FunctionComponent,
  ReactEventHandler,
  useContext
} from 'react'
import {
  useHistory,
  useLocation
} from 'react-router-dom'
import { PortfolioContextValueType } from '../../../types/contextTypes'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { LinkCustom } from '../link-custom/LinkCustom'

interface LinkDelayedPropsType {
  to: string
  handleCLick?: () => void
  isBlock?: boolean
  tabIndex?: number
}

export const LinkDelayed: FunctionComponent<LinkDelayedPropsType> = ({
  children,
  to,
  handleCLick,
  isBlock,
  tabIndex
}) => {
  const {
    handleNavigation,
    handleNavigationComplete
  } = useContext(PortfolioContext) as PortfolioContextValueType

  const history = useHistory()
  const location = useLocation()

  const handleClick: ReactEventHandler = event => {
    if (handleCLick) handleCLick()

    const currentPathName = location?.pathname

    if (currentPathName === to) return

    const delay = handleNavigation(
      currentPathName,
      event,
      to
    )

    if (event.defaultPrevented) return

    if (delay === 0) {
      history.push(to)

      return
    }

    event.preventDefault()

    setTimeout(
      () => {
        history.push(to)
        handleNavigationComplete()
      },
      delay
    )
  }

  return (
    <LinkCustom
      isBlock={isBlock}
      onClick={handleClick}
      tabIndex={tabIndex}
      to={to}
    >
      { children }
    </LinkCustom>
  )
}

