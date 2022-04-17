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
  handleClick?: () => void
  isBlock?: boolean
  tabIndex?: number
  hasLinkStyling?: boolean
}

export const LinkDelayed: FunctionComponent<LinkDelayedPropsType> = ({
  children,
  to,
  handleClick,
  isBlock,
  tabIndex,
  hasLinkStyling
}) => {
  const {
    handleNavigation,
    handleNavigationComplete
  } = useContext(PortfolioContext) as PortfolioContextValueType

  const history = useHistory()
  const location = useLocation()

  const handleLinkClick: ReactEventHandler = event => {
    if (handleClick) handleClick()

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
      handleNavigationComplete()

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
      hasLinkStyling={hasLinkStyling}
      isBlock={isBlock}
      onClick={handleLinkClick}
      tabIndex={tabIndex}
      to={to}
    >
      { children }
    </LinkCustom>
  )
}

