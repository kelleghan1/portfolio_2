import React, { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'
import { PortfolioItemLinkType } from '../../../types/dataTypes'
import { Spacer } from '../../layout/spacer/Spacer'
import { LinkCustom } from '../link-custom/LinkCustom'
import { LinkDelayed } from '../link-delayed/LinkDelayed'
import { TagH } from '../tag-h/TagH'
import { TagP } from '../tag-p/TagP'
import { ProjectDescriptionStyles } from './ProjectDescriptionStyles'

const ProjectDescriptionStyled = styled.div`${ProjectDescriptionStyles}`

interface ProjectDescriptionProps {
  isNavigating: boolean
  name: string
  products: string[]
  description: string
  productLinks: PortfolioItemLinkType[]
  githubLinks: PortfolioItemLinkType[]
}

export const ProjectDescription: FunctionComponent<ProjectDescriptionProps> = ({
  description,
  isNavigating,
  name,
  products,
  productLinks,
  githubLinks
}) => {
  const renderLink = (
    url: string,
    label: string,
    isInternal: boolean
  ): ReactElement => {
    if (isInternal) {
      return (
        <LinkDelayed
          hasLinkStyling={true}
          to={url}
        >
          { label }
        </LinkDelayed>
      )
    }

    return (
      <LinkCustom
        hasLinkStyling={true}
        isExternal={true}
        target='_blank'
        to={url}
      >
        { label }
      </LinkCustom>
    )
  }

  const renderLinks = (): ReactElement | null => {
    const linkItems = [
      ...(productLinks ?? []),
      ...(githubLinks ?? [])
    ]

    if (!linkItems.length) return null

    return (
      <Spacer
        b={0}
        l={0}
        r={0}
        t={2}
      >
        {
          linkItems.map((
            {
              url,
              label,
              isInternal = false
            },
            index
          ) => (
            <Spacer
              b={(index === linkItems.length - 1) ? 0 : 1}
              key={url}
              l={0}
              r={0}
              t={0}
            >
              <div className='link-item-wrapper'>
                {
                  renderLink(
                    url,
                    label,
                    isInternal
                  )
                }
              </div>
            </Spacer>
          ))
        }
      </Spacer>
    )
  }

  return (
    <ProjectDescriptionStyled className={`fade-in ${isNavigating ? 'fade-out' : ''}`}>
      <Spacer
        b={3}
        l={0}
        r={0}
        t={0}
      >
        <div className='description-wrapper'>
          <Spacer
            b={2.5}
            l={3}
            r={3}
            t={2.5}
          >
            <Spacer
              b={2}
              l={0}
              r={0}
              t={0}
            >
              <TagH size={2}>
                { name }
              </TagH>
            </Spacer>
            <Spacer
              b={2}
              l={0}
              r={0}
              t={0}
            >
              <TagH size={4}>
                { products.join(' • ') }
              </TagH>
            </Spacer>
            <TagP>
              { description }
            </TagP>
            { renderLinks() }
          </Spacer>
        </div>
      </Spacer>
    </ProjectDescriptionStyled>
  )
}
