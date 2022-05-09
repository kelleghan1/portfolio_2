import React, { FunctionComponent, useMemo } from 'react'
import styled from 'styled-components'
import { deriveAspectRatioFromImageUrl } from '../../../utils/helpers'
import { Spacer } from '../../layout/spacer/Spacer'
import { Image } from '../image/Image'
import { LoadingContent } from '../loading-content/LoadingContent'
import { ProjectImageStyles } from './ProjectImageStyles'

const ProjectImageStyled = styled.div`${ProjectImageStyles}`

interface ProjectImagePropsType {
  imageUrl: string
  altText: string
  isLoaded: boolean
  isNavigating: boolean
}

export const ProjectImage: FunctionComponent<ProjectImagePropsType> = ({
  altText,
  imageUrl,
  isLoaded,
  isNavigating
}) => {
  const aspectRatio = deriveAspectRatioFromImageUrl(imageUrl)

  return (
    <ProjectImageStyled aspectRatio={aspectRatio}>
      <Spacer
        b={3}
        l={0}
        r={0}
        t={0}
      >
        <div className={`fade-in relative-wrapper ${isNavigating ? 'fade-out' : ''}`}>
          <div className={`image-wrapper ${isLoaded ? 'fade-in' : ''}`}>
            <Image
              altText={altText}
              aspectRatio={aspectRatio ?? undefined}
              src={imageUrl}
            />
          </div>
          { !isLoaded && <LoadingContent /> }
        </div>
      </Spacer>
    </ProjectImageStyled>
  )
}
