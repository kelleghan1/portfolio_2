import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Image } from '../image/Image'
import { PortfolioGridItemStyles } from './PortfolioGridItemStyles'

const PortfolioGridItemStyled = styled.div`${PortfolioGridItemStyles}`

type PortfolioGridItemPropsType = {
  homeImage: string,
  id: string
}

export const PortfolioGridItem: FunctionComponent<PortfolioGridItemPropsType> = ({
  homeImage,
  id
}) => {
  return (
    <PortfolioGridItemStyled>
      <div className='image-wrapper'>
        <Link to={`/project/${id}`}>
          <Image src={ homeImage } />
        </Link>
      </div>
    </PortfolioGridItemStyled>
  )
}

