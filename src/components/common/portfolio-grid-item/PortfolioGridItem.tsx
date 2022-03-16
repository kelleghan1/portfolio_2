import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Image } from '../image/Image'
import { LinkCustom } from '../link-custom/LinkCustom'
import { PortfolioGridItemStyles } from './PortfolioGridItemStyles'

const PortfolioGridItemStyled = styled.div`
  ${PortfolioGridItemStyles}
`

interface PortfolioGridItemPropsType {
  homeImage: string
  projectId: string
}

export const PortfolioGridItem: FunctionComponent<PortfolioGridItemPropsType> = ({
  homeImage,
  projectId,
  ...rest
}) => {
  // const [isImageLoaded, setIsImageLoaded] = useState(false)
  // const [isFadeInApplied, setIsFadeInApplied] = useState(false)

  // const handleImageLoad: ReactEventHandler = () => {
  //   setIsImageLoaded(true)
  //   setIsFadeInApplied(true)
  // }

  // let classNames = ''

  // if (isFadeInApplied) classNames += 'fade-in'
  // if (isImageLoaded) classNames += ' opaque'

  return (
    <PortfolioGridItemStyled
      className='fade-in'
      {...rest}
    >
      <div className='image-wrapper'>
        <LinkCustom to={`/project/${projectId}`}>
          <Image src={ homeImage } />
        </LinkCustom>
      </div>
    </PortfolioGridItemStyled>
  )
}

