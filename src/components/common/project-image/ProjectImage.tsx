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
}) => useMemo(
  () => {
    const aspectRatio = deriveAspectRatioFromImageUrl(imageUrl)

    if (isLoaded) {
      return (
        <ProjectImageStyled
          className={`fade-in ${isNavigating ? 'fade-out' : ''}`}
          key={`${imageUrl}-loaded`}
        >
          <Spacer
            b={3}
            l={0}
            r={0}
            t={0}
          >
            <Image
              altText={altText}
              src={imageUrl}
            />
          </Spacer>
        </ProjectImageStyled>
      )
    }

    return (
      <ProjectImageStyled
        aspectRatio={aspectRatio}
        className={`fade-in ${isNavigating ? 'fade-out' : ''}`}
        key={`${imageUrl}-unloaded`}
      >
        <Spacer
          b={3}
          l={0}
          r={0}
          t={0}
        >
          <div className='loading-wrapper'>
            <LoadingContent />
          </div>
        </Spacer>
      </ProjectImageStyled>
    )
  },
  [
    altText,
    imageUrl,
    isLoaded,
    isNavigating
  ]
)
