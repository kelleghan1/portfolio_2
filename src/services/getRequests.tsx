import {
  PortfolioItemsResponseType,
  PortfolioItemType
} from '../types/dataTypes'
import {
  absintheHouseBlack,
  absintheHouseMenuMock,
  absintheHouseSiteSquare,
  absintheHouseWhite,
  alchemistLabsBlue,
  alchemistLabsWater,
  carvellImg,
  carvellSiteMockSquare,
  carvellWhite,
  craftHealthBlue,
  craftHealthWhite,
  dropzioImg,
  dropzioMock1,
  dropzioMock2,
  dropzioMock3,
  dropzioMock4,
  dropzioMockSquare,
  familyhospiceBrochureInside,
  familyhospiceBrochureOutside,
  familyhospiceSiteSquare,
  fhhSiteBrochureInside,
  fhhSiteBrochureOutside,
  fhhSiteSquare,
  flightSwitchBlack,
  flightSwitchShirtAstro,
  flightSwitchShirtCity,
  flightSwitchShirtFlag,
  flightSwitchShirtSoldier,
  flightSwitchSiteMock,
  flightSwitchWhite,
  ftaSiteMockSquare,
  // geoball,
  grillerzFlames,
  grillerzSign,
  grillerzWhite,
  jamFactoryBlack,
  jamFactoryBlackAndWhite,
  jamFactoryWhite,
  knightMoves,
  knightMovesMock,
  moonwalkersBlack,
  moonwalkersPink,
  moonwalkersWhite,
  properMotionCover,
  purpleStateBlack,
  purpleStatePosterMock,
  purpleStateWhite,
  revmatekBlack,
  revmatekOrange,
  revmatekWhite,
  risingSunBook,
  risingSunCover,
  risingSunDisc,
  risingSunLogo,
  silverlineMediaBlack,
  silverlineMediaGrey,
  silverlineMediaWhite,
  sunshineTreeFarmBlack,
  sunshineTreeFarmGreen,
  sunshineTreeFarmWhite,
  teneoTalentBlack,
  teneoTalentWhite,
  yodelLogo,
  yodelMock,
  yodelMock1,
  yodelMock3,
  yodelMock4,
  yodelMockSquare
} from '../utils/constants/imageLinksCdn'

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
    description: 'Dropzio is a geolocation hybrid app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with Cordova and Ionic and was written in AngularJS. The back end was created using Ruby on Rails and manages users, posts, and geographic data. The logo was created with Adobe Illustrator.'
  },
  {
    categories: [ 'development' ],
    name: 'Fantasy Team Advice',
    rowColor: '#fff',
    id: 'fantasyteamadvice',
    products: [ 'Fantasy Sports Platform' ],
    homeImage: ftaSiteMockSquare,
    primaryImage: ftaSiteMockSquare,
    images: [],
    productLinks: [
      {
        label: 'Visit Fantasy Team Advice',
        url: 'https://fantasyteamadvice.com/'
      }
    ],
    description: 'The Fantasy Team Advice platform provides a comprehensive suite of fantasy tools, content, and advice for thousands of active fantasy sports players. It offers a subscription service with multiple tiers, lineup generators, and advanced sports data analysis tools for more than eight sports leagues. The front end is built on React served by a Node/Express back end and hosted on an AWS EC2 linux instance with Postgres and SQL. Several independent Node APIs are used to aggregate live sports data stored in the application database. Lineups are generated in an independent AWS Lambda Python function and relayed back to the client in real time using websockets. Recurring subscriptions are managed by Stripe and PayPal and synchronized with the application database via webhooks.'
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
      silverlineMediaWhite,
      silverlineMediaBlack
    ],
    description: 'Silverline Media offers photo and video production services. The logo was created using Adobe Illustrator.'
  },
  {
    categories: [ 'design', 'development' ],
    name: 'Carvell Design + Build',
    rowColor: '#fff',
    id: 'carvell',
    products: [ 'Brand', 'Website' ],
    homeImage: carvellSiteMockSquare,
    primaryImage: carvellImg,
    images: [
      carvellSiteMockSquare,
      carvellWhite
    ],
    productLinks: [
      {
        label: 'Visit Carvell Design + Build',
        url: 'https://carvelldesignbuild.com/'
      }
    ],
    description: 'Carvell Design + Build is a full service design and build firm that specializes in customized remodels and restoration, additions, and new construction work. The logo was created with Adobe Illustrator and the Carvell website was created using Wordpress.'
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
    description: 'Knight Moves is a web application that calculates the minimum number of moves needed for a chess knight to reach a given position. The app was written in Javascript and AngularJS in 2016, and rewritten with React as a public npm package in 2022.'
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
    categories: [ 'development' ],
    name: 'Yodel',
    rowColor: '#FFD67F',
    id: 'yodel',
    homeImage: yodelMockSquare,
    primaryImage: yodelLogo,
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
      yodelMock,
      yodelMock1,
      yodelMock3,
      yodelMock4
    ],
    description: 'Yodel is a social geolocation hybrid app designed to promote meeting new people and face to face interaction. The app allows users to see others within a custom range and send those users messages. It was created in Ionic and Cordova and written in AngularJS. It leverages an Express back end with Knex and SQL to manage users and their location data. The logo was created using Adobe Illustrator.'
  },
  // {
  //   categories: [ 'development' ],
  //   rowColor: '#050608',
  //   textColor: '#fff',
  //   id: 'geoball',
  //   name: 'Geoball',
  //   products: [ 'Browser Game' ],
  //   homeImage: geoball,
  //   primaryImage: geoball,
  //   images: [],
  //   githubLinks: [
  //     {
  //       label: 'View on Github',
  //       url: 'https://github.com/kelleghan1/mySite.github.io/'
  //     }
  //   ],
  //   description: 'Geoball is a game created using JavaScript, jQuery, and canvas elements. It was then modified to function in AngularJS on this website. The game contacts an image API to retrieve a random background image for each game.'
  // },
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
    categories: [ 'design' ],
    name: 'Craft Health',
    id: 'crafthealth',
    products: [ 'Logo' ],
    rowColor: '#050608',
    homeImage: craftHealthBlue,
    primaryImage: craftHealthBlue,
    textColor: '#fff',
    images: [ craftHealthWhite ],
    productLinks: [
      {
        label: 'Visit Craft Health',
        url: 'https://crafthealth.net/'
      }
    ],
    description: 'Craft Health is a leading home health and hospice provider in Colorado offering Skilled Nursing, Physical Therapy, Speech Therapy, CNA services, and more. The logo was created in Adobe Illustrator.'
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
      moonwalkersPink,
      moonwalkersBlack
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
      10
    )
  })
