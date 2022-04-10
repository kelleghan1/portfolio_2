import React,
{
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext
} from 'react'
import styled from 'styled-components'
import { LinkCustom } from '../../common/link-custom/LinkCustom'
import { TagH } from '../../common/tag-h/TagH'
import { TagP } from '../../common/tag-p/TagP'
import { PortfolioContext } from '../../context/PortfolioContextProvider'
import { Container } from '../../layout/container/Container'
import { PageRow } from '../../layout/page-row/PageRow'
import { PureUnit } from '../../layout/pure-unit/PureUnit'
import { Pure } from '../../layout/pure/Pure'
import { Spacer } from '../../layout/spacer/Spacer'
import { ContactContentStyles } from './ContactContentStyles'

const ContactContentStyled = styled.div`${ContactContentStyles}`

export const ContactContent: FunctionComponent = () => {
  const { isNavigating } = useContext(PortfolioContext)

  const renderGithubLink = (): ReactNode =>
    <LinkCustom
      hasLinkStyling
      isExternal
      target='_blank'
      to='https://github.com/kelleghan1/'
    >
      Github
    </LinkCustom>

  const renderContact = (): ReactElement =>
    <div className='info-wrapper'>
      <Spacer
        l={ 3 }
        r={ 3 }
      >
        <Spacer
          b={ 2 }
          l={ 0 }
          r={ 0 }
          t={ 0 }
        >
          <TagH size={ 4 }>
            Contact
          </TagH>
        </Spacer>
        <Spacer
          l={ 0 }
          r={ 0 }
          t={ 0 }
        >
          <TagP>
            Like my work? I create websites, online stores, mobile apps, logos, print material, advertisements and more.
            Connect with me on <span>{ renderGithubLink() }</span> here or tell me about your project at:
          </TagP>
        </Spacer>
        <LinkCustom
          hasLinkStyling
          isExternal
          to='mailto: coleman@kelleghandesign.com'
        >
          coleman@kelleghandesign.com
        </LinkCustom>
      </Spacer>
    </div>

  const renderAbout = (): ReactElement =>
    <div className='info-wrapper'>
      <Spacer
        l={ 3 }
        r={ 3 }
      >
        <Spacer
          b={ 2 }
          l={ 0 }
          r={ 0 }
          t={ 0 }
        >
          <TagH size={ 4 }>
            About this website
          </TagH>
        </Spacer>
        <TagP>
          This website is built using React and create-react-app with Typescript. The code for this site serves as the most accurate representation of how I build React websites:
        </TagP>
        <Spacer
          b={ 0 }
          l={ 0 }
          r={ 0 }
          t={ 2 }
        >
          <LinkCustom
            hasLinkStyling
            isExternal
            target='_blank'
            to='https://github.com/kelleghan1/portfolio_2'
          >
            View the code for this website on Github
          </LinkCustom>
        </Spacer>
      </Spacer>
    </div>

  const renderColumns = (): ReactElement =>
    <Spacer
      l={ 1.5 }
      r={ 1.5 }
      t={ 0 }
    >
      <Pure>
        <PureUnit
          isFlex
          pureClass='u-1 u-md-1-2'
        >
          <Spacer
            isFlex
            l={ 1.5 }
            r={ 1.5 }
            t={ 0 }
          >
            { renderContact() }
          </Spacer>
        </PureUnit>
        <PureUnit
          isFlex
          pureClass='u-1 u-md-1-2'
        >
          <Spacer
            isFlex
            l={ 1.5 }
            r={ 1.5 }
            t={ 0 }
          >
            { renderAbout() }
          </Spacer>
        </PureUnit>
      </Pure>
    </Spacer>

  return (
    <PageRow>
      <Container>
        <ContactContentStyled className={ `fade-in ${isNavigating ? 'fade-out' : ''}` }>
          { renderColumns() }
        </ContactContentStyled>
      </Container>
    </PageRow>
  )
}
