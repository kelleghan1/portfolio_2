import absintheHouseBlack from '../assets/images/absinthe-house/absinthehouseblack.jpg'
import absintheHouseSiteSquare from '../assets/images/absinthe-house/absinthehousesite-square.jpg'
import absintheHouseWhite from '../assets/images/absinthe-house/absinthehousewhite.jpg'
import absintheHouseMenuMock from '../assets/images/absinthe-house/absinthemenumockup.png'
import alchemistLabsBlue from '../assets/images/alchemist-labs/alchemistlabsblue.jpg'
import alchemistLabsWater from '../assets/images/alchemist-labs/alchemistlabswater.jpg'
import carvellImg from '../assets/images/carvell/carvell.png'
import carvellSiteMockSquare from '../assets/images/carvell/carvellsitemock-square.jpg'
import carvellWhite from '../assets/images/carvell/carvellwhite.png'
import dropzioImg from '../assets/images/dropzio/dropzio.jpg'
import dropzioMock1 from '../assets/images/dropzio/dropziomock1.jpg'
import dropzioMock2 from '../assets/images/dropzio/dropziomock2.jpg'
import dropzioMock3 from '../assets/images/dropzio/dropziomock3.jpg'
import dropzioMock4 from '../assets/images/dropzio/dropziomock4.jpg'
import dropzioMockSquare from '../assets/images/dropzio/dropziomocksquare.jpg'
import fhhSiteBrochureInside from '../assets/images/family-home-health/fhhbrochuresquare-inside.jpg'
import fhhSiteBrochureOutside from '../assets/images/family-home-health/fhhbrochuresquare-outside.jpg'
import fhhSiteSquare from '../assets/images/family-home-health/fhhsite-square.jpg'
import familyhospiceBrochureInside from '../assets/images/family-hospice/familyhospicebrochuresquare-inside.jpg'
import familyhospiceBrochureOutside from '../assets/images/family-hospice/familyhospicebrochuresquare-outside.jpg'
import familyhospiceSiteSquare from '../assets/images/family-hospice/familyhospicesite-square.jpg'
import flightSwitchBlack from '../assets/images/flightswitch/flightswitchblack.jpg'
import flightSwitchSiteMock from '../assets/images/flightswitch/flightswitchsitemock.jpg'
import flightSwitchWhite from '../assets/images/flightswitch/flightswitchwhite.jpg'
import flightSwitchShirtAstro from '../assets/images/flightswitch/shirtastro.png'
import flightSwitchShirtCity from '../assets/images/flightswitch/shirtcity.png'
import flightSwitchShirtFlag from '../assets/images/flightswitch/shirtflag.png'
import flightSwitchShirtSoldier from '../assets/images/flightswitch/shirtsoldier.png'
import geoball from '../assets/images/geoball/geoball.jpg'
import grillerzFlames from '../assets/images/grillerz/grillerzflames.jpg'
import grillerzSign from '../assets/images/grillerz/grillerzsign.jpg'
import grillerzWhite from '../assets/images/grillerz/grillerzwhite.jpg'
import jamFactoryBlack from '../assets/images/jam-factory/jamfactoryblack.jpg'
import jamFactoryBlackAndWhite from '../assets/images/jam-factory/jamfactoryblackandwhite.jpg'
import jamFactoryWhite from '../assets/images/jam-factory/jamfactorywhite.jpg'
import knightMoves from '../assets/images/knight-moves/knightmoves.png'
import knightMovesMock from '../assets/images/knight-moves/knightmovesmock.png'
import moonwalkersBlack from '../assets/images/moonwalkers/moonwalkersblack.jpg'
import moonwalkersPink from '../assets/images/moonwalkers/moonwalkerspink.jpg'
import moonwalkersWhite from '../assets/images/moonwalkers/moonwalkerswhite.jpg'
import properMotionCover from '../assets/images/proper-motion/propermotioncover.jpg'
import purpleStateBlack from '../assets/images/purple-state/purplestateblack.jpg'
import purpleStatePosterMock from '../assets/images/purple-state/purplestatepostermock.png'
import purpleStateWhite from '../assets/images/purple-state/purplestatewhite.jpg'
import revmatekBlack from '../assets/images/revmatek/revmatekblack.jpg'
import revmatekOrange from '../assets/images/revmatek/revmatekorange.jpg'
import revmatekWhite from '../assets/images/revmatek/revmatekwhite.jpg'
import risingSunBook from '../assets/images/rising-sun/risingsunbook.jpg'
import risingSunCover from '../assets/images/rising-sun/risingsuncover.jpg'
import risingSunDisc from '../assets/images/rising-sun/risingsundisc.jpg'
import risingSunLogo from '../assets/images/rising-sun/risingsunlogo.jpg'
import silverlineMediaBlack from '../assets/images/silverline-media/silverlinemediablack.jpg'
import silverlineMediaGrey from '../assets/images/silverline-media/silverlinemediagrey.jpg'
import silverlineMediaWhite from '../assets/images/silverline-media/silverlinemediawhite.jpg'
import sunshineTreeFarmBlack from '../assets/images/sunshine-tree-farm/sunshinetreefarmblack.jpg'
import sunshineTreeFarmGreen from '../assets/images/sunshine-tree-farm/sunshinetreefarmgreen.jpg'
import sunshineTreeFarmWhite from '../assets/images/sunshine-tree-farm/sunshinetreefarmwhite.jpg'
import teneoTalentBlack from '../assets/images/teneo-talent/teneotalentblack.jpg'
import teneoTalentWhite from '../assets/images/teneo-talent/teneotalentwhite.jpg'
import yodelMock from '../assets/images/yodel/yodelmock.jpg'
import yodelMock1 from '../assets/images/yodel/yodelmock1.jpg'
import yodelMock3 from '../assets/images/yodel/yodelmock3.jpg'
import yodelMock4 from '../assets/images/yodel/yodelmock4.jpg'
import yodelMockSquare from '../assets/images/yodel/yodelmocksquare.jpg'
import {
  PortfolioItemsResponseType,
  PortfolioItemType
} from '../types/dataTypes'

const portfolioItemArray: PortfolioItemType[] = [
  {
    rowColor: '#fff',
    categories: [ 'development' ],
    name: 'Dropzio',
    id: 'dropzio',
    homeImage: dropzioMockSquare,
    products: [ 'Logo', 'Mobile App' ],
    primaryImage: dropzioImg,
    images: [
      dropzioMock1,
      dropzioMock2,
      dropzioMock3,
      dropzioMock4
    ],
    githubLinks: [
      {
        url: 'https://github.com/kelleghan1/dropzioApp2/',
        label: 'View front end Github'
      },
      {
        url: 'https://github.com/kelleghan1/dropzio_server/',
        label: 'View back end on Github'
      }
    ],
    description: 'Dropzio is a geolocation hybrid app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with Cordova and Ionic and was written in AngularJS. The back end was created using Ruby on Rails and manages users, posts, and geographic data through CRUD operations. The logo was created with Adobe Illustrator.'
  },
  {
    rowColor: '#787a7b',
    categories: [ 'design' ],
    name: 'Silverline Media',
    id: 'silverlineMedia',
    textColor: '#fff',
    products: [ 'Logo' ],
    homeImage: silverlineMediaGrey,
    primaryImage: silverlineMediaGrey,
    images: [
      silverlineMediaBlack,
      silverlineMediaWhite
    ],
    description: 'Silverline Media offers photo and video production services. The logo was created using Adobe Illustrator.'
  },
  {
    rowColor: '#050608',
    categories: [ 'design', 'development' ],
    name: 'Flight Switch',
    id: 'flightswitch',
    textColor: '#fff',
    homeImage: flightSwitchBlack,
    products: [ 'Logo', 'Shirt Designs', 'Online Store' ],
    primaryImage: flightSwitchBlack,
    images: [
      flightSwitchSiteMock,
      flightSwitchWhite,
      flightSwitchShirtAstro,
      flightSwitchShirtCity,
      flightSwitchShirtFlag,
      flightSwitchShirtSoldier
    ],
    githubLinks: [
      {
        url: 'https://github.com/kelleghan1/flight-switch-store/',
        label: 'View on Github'
      }
    ],
    description: 'Flight Switch is a Colorado based clothing company. The brand and products were created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign. The online store was created with JavaScript and Handlebars on the front end. The back end was created with Express, Bookshelf, and Knex to manage a robust inventory management system for administrators.'
  },
  {
    categories: [ 'design', 'development' ],
    name: 'Carvell Design + Build',
    rowColor: '#fff',
    id: 'carvell',
    products: [ 'Logo', 'Website' ],
    homeImage: carvellSiteMockSquare,
    primaryImage: carvellImg,
    images: [
      carvellSiteMockSquare,
      carvellWhite
    ],
    productLinks: [
      {
        label: 'Visit the website',
        url: 'https://carvelldesignbuild.com/'
      }
    ],
    description: 'Carvell Design + Build is a full service design and build firm that specializes in customized remodels and restoration, additions, and new construction work. The logo was created with Adobe Illustrator and the Carvell website was created using Wordpress.'
  },
  {
    categories: [ 'design' ],
    name: 'Grillerz Pub',
    rowColor: '#050608',
    id: 'grillerzpub',
    products: [ 'Logo' ],
    textColor: '#fff',
    homeImage: grillerzFlames,
    primaryImage: grillerzFlames,
    images: [
      grillerzSign,
      grillerzWhite
    ],
    description: 'Grillerz Pub is a bar and restaurant in Englewood, Colorado. The logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design' ],
    name: 'Sunshine Tree Farm',
    rowColor: '#fff',
    id: 'sunshinetreefarm',
    products: [ 'Logo' ],
    homeImage: sunshineTreeFarmWhite,
    primaryImage: sunshineTreeFarmWhite,
    images: [
      sunshineTreeFarmGreen,
      sunshineTreeFarmBlack
    ],
    description: 'Sunshine Tree Farm grows and sell a variety of trees in Colorado. The logo was created with Adobe Illustrator.'
  },
  {
    categories: [ 'development' ],
    rowColor: '#050608',
    textColor: '#fff',
    id: 'geoball',
    name: 'Geoball',
    products: [ 'Browser Game' ],
    homeImage: geoball,
    primaryImage: geoball,
    images: [],
    githubLinks: [
      {
        label: 'View on Github',
        url: 'https://github.com/kelleghan1/mySite.github.io/'
      }
    ],
    description: 'Geoball is a game created using JavaScript, jQuery, and canvas elements. It was then modified to function in AngularJS on this website. The game contacts an image API to retrieve a random background image for each game.'
  },
  {
    categories: [ 'development' ],
    name: 'Yodel',
    rowColor: '#FFD67F',
    id: 'yodel',
    homeImage: yodelMockSquare,
    primaryImage: yodelMock,
    products: [ 'Logo, Mobile App' ],
    githubLinks: [
      {
        label: 'View front end on Github',
        url: 'https://github.com/MSturges/YodelApp/'
      },
      {
        label: 'View back end on Github',
        url: 'https://github.com/MatieuB/yodel/'
      }
    ],
    images: [
      yodelMock1,
      yodelMock3,
      yodelMock4
    ],
    description: 'Yodel is a social geolocation hybrid app designed to promote meeting new people and face to face interaction. The app allows users to see others within a custom range and send those users messages. It was created in Ionic and Cordova and written in AngularJS. It has a CRUD back end in Express and Knex to manage users and their location data. The logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design' ],
    name: 'Alchemist Labs',
    products: [ 'Logo' ],
    id: 'alchemistlabs',
    rowColor: '#627478',
    homeImage: alchemistLabsWater,
    primaryImage: alchemistLabsWater,
    textColor: '#fff',
    images: [
      alchemistLabsBlue
    ],
    description: 'Alchemist Labs produces vapor concentrate for vaporizer products. The logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design' ],
    name: 'Jam Factory',
    products: [ 'Logo' ],
    id: 'jamfactory',
    rowColor: '#fff',
    homeImage: jamFactoryWhite,
    primaryImage: jamFactoryWhite,
    images: [
      jamFactoryBlack,
      jamFactoryBlackAndWhite
    ],
    description: 'Jam Factory is a music and entertainment event coordination and promotion company. The logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design' ],
    name: 'Revmatek',
    products: [ 'Logo' ],
    id: 'revmatek',
    rowColor: '#050608',
    homeImage: revmatekOrange,
    primaryImage: revmatekOrange,
    textColor: '#fff',
    images: [
      revmatekBlack,
      revmatekWhite
    ],
    description: 'Revmatek offers peer to peer streaming service and solutions. The logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design', 'development' ],
    name: 'Family Home Health',
    id: 'familyhomehealth',
    rowColor: '#fff',
    products: [ 'Brochure', 'Website' ],
    homeImage: fhhSiteSquare,
    primaryImage: fhhSiteSquare,
    images: [
      fhhSiteBrochureInside,
      fhhSiteBrochureOutside
    ],
    description: 'Family Home Health is a Colorado based company that offers health care at the homes of their patients. Their trifold brochure was created using Adobe Indesign, Adobe Illustrator, and Adobe Photoshop. The Family Home Health website was created in Wordpress.'
  },
  {
    categories: [ 'design' ],
    name: 'Purple State Productions',
    id: 'purplerstateproductions',
    rowColor: '#050608',
    products: [ 'Logo', 'Event Poster' ],
    textColor: '#fff',
    homeImage: purpleStateBlack,
    primaryImage: purpleStateBlack,
    images: [
      purpleStatePosterMock,
      purpleStateWhite
    ],
    description: 'Purple State organizes shows and music related events. The logo was created using Adobe Illustrator. The event poster was created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
  },
  {
    categories: [ 'design' ],
    name: 'Rising Sun',
    id: 'risingsun',
    rowColor: '#fff',
    products: [ 'Logo', 'Album Cover', 'Booklet' ],
    homeImage: risingSunCover,
    primaryImage: risingSunCover,
    images: [
      risingSunBook,
      risingSunDisc,
      risingSunLogo
    ],
    description: 'Rising sun is an English DJ and producer. The album cover and logo were created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
  },
  {
    categories: [ 'design' ],
    name: 'Teneo Talent',
    id: 'teneotalent',
    products: [ 'Logo' ],
    rowColor: '#fff',
    homeImage: teneoTalentWhite,
    primaryImage: teneoTalentWhite,
    images: [ teneoTalentBlack ],
    description: 'Teneo Talent is a job placement service based in Colorado. The logo and the Teneo Talent website were redesigned using Adobe Illustrator.'
  },
  {
    categories: [ 'design' ],
    name: 'Proper Motion',
    id: 'propermotion',
    products: [ 'Album Cover' ],
    rowColor: '#050608',
    homeImage: properMotionCover,
    primaryImage: properMotionCover,
    textColor: '#fff',
    images: [],
    description: 'Proper Motion is a music producer based in Colorado. The album cover was created using Adobe Photoshop and Adobe Illustrator.'
  },
  {
    categories: [ 'development' ],
    name: 'Knight Moves',
    id: 'knightmoves',
    rowColor: '#fff',
    homeImage: knightMovesMock,
    primaryImage: knightMoves,
    products: [ 'Side Project' ],
    images: [
      knightMovesMock
    ],
    productLinks: [
      {
        url: '/project/knightmoves/demo',
        label: 'Try the app',
        isInternal: true
      }
    ],
    githubLinks: [
      {
        label: 'View on Github (Angular)',
        url: 'https://github.com/kelleghan1/knight/'
      },
      {
        label: 'View on Github (React, NPM package)',
        url: 'https://github.com/kelleghan1/knight_moves_2'
      }
    ],
    description: 'Knight Moves is a web application that calculates the minimum minimum number of moves needed for a chess knight to reach a given position. The app was written in Javascript and AngularJS in 2016, and rewritten in React as a public npm package.'
  },
  {
    categories: [ 'design', 'development' ],
    name: 'Family Hospice',
    id: 'familyhospice',
    products: [ 'Brochure', 'Website' ],
    rowColor: '#fff',
    homeImage: familyhospiceSiteSquare,
    primaryImage: familyhospiceSiteSquare,
    images: [
      familyhospiceBrochureInside,
      familyhospiceBrochureOutside
    ],
    description: 'Family Hospice is an end of life care service. They serve patients at their homes in order to maximize quality of life. Their brochure was creaed using Adobe Illustrator, Adobe InDesign, and Adobe Photoshop. The Family Hospice website was created using the Adobe Creative Suite and Wordpress.'
  },
  {
    categories: [ 'design' ],
    name: 'Moonwalkers',
    id: 'moonwalkers',
    products: [ 'Logo' ],
    rowColor: '#fff',
    homeImage: moonwalkersWhite,
    primaryImage: moonwalkersWhite,
    images: [
      moonwalkersBlack,
      moonwalkersPink
    ],
    description: 'Moonwalkers is an all cancer benefit and fundraising team. Their logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design' ],
    name: 'Absinthe House',
    id: 'absinthehouse',
    products: [ 'Logo, Menu, Website' ],
    rowColor: '#050608',
    textColor: '#fff',
    homeImage: absintheHouseBlack,
    primaryImage: absintheHouseBlack,
    images: [
      absintheHouseSiteSquare,
      absintheHouseWhite,
      absintheHouseMenuMock
    ],
    description: 'Absinthe House is a bar and nightclub in Boulder, Colorado. Adobe Illustrator and Adobe InDesign were used to create the vector banner and menu. The Absinthe House website was designed using Adobe Illustrator and built in Wix.'
  }
]

export const getPortfolioData = async (): Promise<PortfolioItemsResponseType> =>
  await new Promise(resolve => {
    setTimeout(
      () => {
        resolve({ data: { items: portfolioItemArray } })
      },
      1000
    )
  })

