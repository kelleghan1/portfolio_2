import absintheHouseBlack from '../assets/images/absinthe-house/absinthehouseblack.jpg'
import alchemistLabsWater from '../assets/images/alchemist-labs/alchemistlabswater.jpg'
import carvellImg from '../assets/images/carvell/carvell.png'
import carvellSiteMockSquare from '../assets/images/carvell/carvellsitemock-square.jpg'
import dropzioImg from '../assets/images/dropzio/dropzio.jpg'
import dropzioMock1 from '../assets/images/dropzio/dropziomock1.jpg'
import dropzioMock2 from '../assets/images/dropzio/dropziomock2.jpg'
import dropzioMock3 from '../assets/images/dropzio/dropziomock3.jpg'
import dropzioMock4 from '../assets/images/dropzio/dropziomock4.jpg'
import dropzioMockSquare from '../assets/images/dropzio/dropziomocksquare.jpg'
import fhhSiteSquare from '../assets/images/family-home-health/fhhsite-square.jpg'
import familyhospiceSiteSquare from '../assets/images/family-hospice/familyhospicesite-square.jpg'
import flightSwitchBlack from '../assets/images/flightswitch/flightswitchblack.jpg'
import geoball from '../assets/images/geoball/geoball.jpg'
import grillerzFlames from '../assets/images/grillerz/grillerzflames.jpg'
import jamFactoryWhite from '../assets/images/jam-factory/jamfactorywhite.jpg'
import knightMovesMock from '../assets/images/knight-moves/knightmovesmock.png'
import moonwalkersWhite from '../assets/images/moonwalkers/moonwalkerswhite.jpg'
import properMotionCover from '../assets/images/proper-motion/propermotioncover.jpg'
import purpleStateBlack from '../assets/images/purple-state/purplestateblack.jpg'
import revmatekOrange from '../assets/images/revmatek/revmatekorange.jpg'
import risingSunCover from '../assets/images/rising-sun/risingsuncover.jpg'
import silverlineMediaGrey from '../assets/images/silverline-media/silverlinemediagrey.jpg'
import sunshineTreeFarmWhite from '../assets/images/sunshine-tree-farm/sunshinetreefarmwhite.jpg'
import teneoTalentWhite from '../assets/images/teneo-talent/teneotalentwhite.jpg'
import yodelMockSquare from '../assets/images/yodel/yodelmocksquare.jpg'
import { PortfolioItemType } from '../types/dataTypes'
import { PortfolioItemsResponseType } from '../types/dataTypes'

const portfolioItemArray: PortfolioItemType[] = [
  {
    rowColor: '#fff',
    categories: ['development'],
    name: 'Dropzio',
    id: 'dropzio',
    homeImage: dropzioMockSquare,
    products: ['Logo', 'Mobile App'],
    primaryImage: dropzioImg,
    images: [
      dropzioMock1,
      dropzioMock2,
      dropzioMock3,
      dropzioMock4
    ],
    description: 'Dropzio is a geolocation hybrid app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with Cordova and Ionic and was written in AngularJS. The back end was created using Ruby on Rails and manages users, posts, and geographic data through CRUD operations. The logo was created with Adobe Illustrator.'
  },
  {
    rowColor: '#787a7b',
    categories: ['design'],
    name: 'Silverline Media',
    id: 'silverlineMedia',
    textColor: '#fff',
    products: ['Logo'],
    homeImage: silverlineMediaGrey,
    primaryImage: '../images/silverline-media/silverlinemediagrey.jpg',
    images: [
      '../images/primary/silverlinemediablack.jpg',
      '../images/primary/silverlinemediawhite.jpg'
    ],
    description: 'Silverline Media offers photo and video production services. The logo was created using Adobe Illustrator.'
  },
  {
    rowColor: '#050608',
    categories: ['design', 'development'],
    name: 'Flight Switch',
    id: 'flightswitch',
    textColor: '#fff',
    homeImage: flightSwitchBlack,
    products: ['Logo', 'Shirt Designs', 'Online Store'],
    primaryImage: '../images/flightswitch/flightswitchblack.jpg',
    images: [
      '../images/mockups/flightswitchsitemock.jpg',
      '../images/primary/flightswitchwhite.jpg',
      '../images/mockups/shirtastro.png',
      '../images/mockups/shirtflag.png',
      '../images/mockups/shirtsoldier.png',
      '../images/mockups/shirtcity.png'
    ],
    description: 'Flight Switch is a Colorado based clothing company. The brand and products were created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign. The online store was created with JavaScript and Handlebars on the front end. The back end was created with Express, Bookshelf, and Knex to manage a robust inventory management system for administrators. You can demo the online store <a target="_blank" href="http://flight-switch-store.herokuapp.com/shirts"><strong>here</strong></a>. To see the GitHub page click <a href="https://github.com/kelleghan1/flight-switch-store" target="_blank"><strong>here</strong></a>.'
  },
  {
    categories: ['design', 'development'],
    name: 'Carvell Design + Build',
    rowColor: '#fff',
    id: 'carvell',
    products: ['Logo', 'Website'],
    homeImage: carvellSiteMockSquare,
    primaryImage: carvellImg,
    images: [
      '../images/mockups/carvellsitemock-square.jpg',
      '../images/primary/carvellwhite.png'
    ],
    description: 'Carvell Design + Build is a full service design and build firm that specializes in customized remodels and restoration, additions, and new construction work. The logo was created with Adobe Illustrator and the <a target="_blank" href="http://carvelldesignbuild.com/">Carvell website</a> was created using Wordpress.'
  },
  {
    categories: ['design'],
    name: 'Grillerz Pub',
    rowColor: '#050608',
    id: 'grillerzpub',
    products: ['Logo'],
    textColor: '#fff',
    homeImage: grillerzFlames,
    primaryImage: grillerzFlames,
    images: [
      '../images/primary/grillerzsign.jpg',
      '../images/primary/grillerzwhite.jpg'
    ],
    description: 'Grillerz Pub is a bar and restaurant in Englewood, Colorado. The logo was created using Adobe Illustrator.'
  },
  {
    categories: ['design'],
    name: 'Sunshine Tree Farm',
    rowColor: '#fff',
    id: 'sunshinetreefarm',
    products: ['Logo'],
    homeImage: sunshineTreeFarmWhite,
    primaryImage: sunshineTreeFarmWhite,
    images: [
      '../images/primary/sunshinetreefarmgreen.jpg',
      '../images/primary/sunshinetreefarmblack.jpg'
    ],
    description: 'Sunshine Tree Farm grows and sell a variety of trees in Colorado. The logo was created with Adobe Illustrator.'
  },
  {
    categories: ['development'],
    rowColor: '#050608',
    textColor: '#fff',
    id: 'geoball',
    name: 'Geoball',
    products: ['Browser Game'],
    homeImage: geoball,
    primaryImage: geoball,
    images: [],
    description: 'Geoball is a game created using JavaScript, jQuery, and canvas elements. It was then modified to function in AngularJS on this website. The game contacts an image API to retrieve a random background image for each game. Play the game <a href="/geoballdemo"><strong>here</strong></a>. To see the GitHub page click <a href="https://github.com/kelleghan1/mySite.github.io" target="_blank"><strong>here</strong></a>.'
  },
  {
    categories: ['development'],
    name: 'Yodel',
    rowColor: '#FFD67F',
    id: 'yodel',
    homeImage: yodelMockSquare,
    primaryImage: yodelMockSquare,
    products: ['Logo, Mobile App'],
    images: [
      '../images/mockups/yodelmock3.jpg',
      '../images/mockups/yodelmock.jpg',
      '../images/mockups/yodelmock4.jpg',
      '../images/mockups/yodelmock1.jpg'
    ],
    description: 'Yodel is a social geolocation hybrid app designed to promote meeting new people and face to face interaction. The app allows users to see others within a custom range and send those users messages. It was created in Ionic and Cordova and written in AngularJS. It has a CRUD back end in Express and Knex to manage users and their location data. The logo was created using Adobe Illustrator. To see the front end on GitHub click <a href="https://github.com/MSturges/YodelApp" target="_blank"><strong>here</strong></a> and to see the back end click <a href="https://github.com/MatieuB/yodel" target="_blank"><strong>here</strong></a>'
  },
  {
    categories: ['design'],
    name: 'Alchemist Labs',
    products: ['Logo'],
    id: 'alchemistlabs',
    rowColor: '#627478',
    homeImage: alchemistLabsWater,
    primaryImage: alchemistLabsWater,
    textColor: '#fff',
    images: [
      '../images/primary/alchemistlabsblue.jpg'
    ],
    description: 'Alchemist Labs produces vapor concentrate for vaporizer products. The logo was created using Adobe Illustrator.'
  },
  {
    categories: ['design'],
    name: 'Jam Factory',
    products: ['Logo'],
    id: 'jamfactory',
    rowColor: '#fff',
    homeImage: jamFactoryWhite,
    primaryImage: jamFactoryWhite,
    images: [
      '../images/primary/jamfactoryblack.jpg',
      '../images/primary/jamfactoryblackandwhite.jpg'
    ],
    description: 'Jam Factory is a music and entertainment event coordination and promotion company. The logo was created using Adobe Illustrator.'
  },
  {
    categories: ['design'],
    name: 'Revmatek',
    products: ['Logo'],
    id: 'revmatek',
    rowColor: '#050608',
    homeImage: revmatekOrange,
    primaryImage: revmatekOrange,
    textColor: '#fff',
    images: [
      '../images/primary/revmatekblack.jpg',
      '../images/primary/revmatekwhite.jpg'
    ],
    description: 'Revmatek offers peer to peer streaming service and solutions. The logo was created using Adobe Illustrator.'
  },
  {
    categories: ['design', 'development'],
    name: 'Family Home Health',
    id: 'familyhomehealth',
    rowColor: '#fff',
    products: ['Brochure', 'Website'],
    homeImage: fhhSiteSquare,
    primaryImage: fhhSiteSquare,
    images: [
      '../images/primary/fhhbrochuresquare-inside.jpg',
      '../images/primary/fhhbrochuresquare-outside.jpg'
    ],
    description: 'Family Home Health is a Colorado based company that offers health care at the homes of their patients. Their trifold brochure was created using Adobe Indesign, Adobe Illustrator, and Adobe Photoshop. The Family Home Health website was created in Wordpress.'
  },
  {
    categories: ['design'],
    name: 'Purple State Productions',
    id: 'purplerstateproductions',
    rowColor: '#050608',
    products: ['Logo', 'Event Poster'],
    textColor: '#fff',
    homeImage: purpleStateBlack,
    primaryImage: purpleStateBlack,
    images: [
      '../images/mockups/purplestatepostermock.png',
      '../images/primary/purplestatewhite.jpg'
    ],
    description: 'Purple State organizes shows and music related events. The logo was created using Adobe Illustrator. The event poster was created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
  },
  {
    categories: ['design'],
    name: 'Rising Sun',
    id: 'risingsun',
    rowColor: '#fff',
    products: ['Logo', 'Album Cover', 'Booklet'],
    homeImage: risingSunCover,
    primaryImage: risingSunCover,
    images: [
      '../images/primary/risingsunbook.jpg',
      '../images/primary/risingsundisc.jpg',
      '../images/primary/risingsunlogo.jpg'
    ],
    description: 'Rising sun is an English DJ and producer. The album cover and logo were created using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign.'
  },
  {
    categories: ['design'],
    name: 'Teneo Talent',
    id: 'teneotalent',
    products: ['Logo'],
    rowColor: '#fff',
    homeImage: teneoTalentWhite,
    primaryImage: teneoTalentWhite,
    images: [
      '../images/primary/teneotalentblack.jpg'
    ],
    description: 'Teneo Talent is a job placement service based in Colorado. The logo and the Teneo Talent website were redesigned using Adobe Illustrator.'
  },
  {
    categories: ['design'],
    name: 'Proper Motion',
    id: 'propermotion',
    products: ['Album Cover'],
    rowColor: '#050608',
    homeImage: properMotionCover,
    primaryImage: properMotionCover,
    textColor: '#fff',
    images: [],
    description: 'Proper Motion is a music producer based in Colorado. The album cover was created using Adobe Photoshop and Adobe Illustrator.'
  },
  {
    categories: ['development'],
    name: 'Knight Moves',
    id: 'knightmoves',
    rowColor: '#fff',
    homeImage: knightMovesMock,
    primaryImage: knightMovesMock,
    products: ['Side Project'],
    images: [
      '../images/primary/knightmovesmock.png'
    ],
    description: 'Knight Moves is a web application that calculates the minimum number of moves a chess knight can take to reach a given position. The app was written in Javascript with an AngularJS front end. Try the app <a href="/knightmovesdemo"><strong>here</strong></a>. To see the GitHub page click <a href="https://github.com/kelleghan1/knight" target="_blank"><strong>here</strong></a>.'
  },
  {
    categories: ['design', 'development'],
    name: 'Family Hospice',
    id: 'familyhospice',
    products: ['Brochure', 'Website'],
    rowColor: '#fff',
    homeImage: familyhospiceSiteSquare,
    primaryImage: familyhospiceSiteSquare,
    images: [
      '../images/primary/familyhospicebrochuresquare-inside.jpg',
      '../images/primary/familyhospicebrochuresquare-outside.jpg'
    ],
    description: 'Family Hospice is an end of life care service. They serve patients at their homes in order to maximize quality of life. Their brochure was creaed using Adobe Illustrator, Adobe InDesign, and Adobe Photoshop. The Family Hospice website was created using the Adobe Creative Suite and Wordpress.'
  },
  {
    categories: ['design'],
    name: 'Moonwalkers',
    id: 'moonwalkers',
    products: ['Logo'],
    rowColor: '#fff',
    homeImage: moonwalkersWhite,
    primaryImage: moonwalkersWhite,
    images: [
      '../images/primary/moonwalkersblack.jpg',
      '../images/primary/moonwalkerspink.jpg'
    ],
    description: 'Moonwalkers is an all cancer benefit and fundraising team. Their logo was created using Adobe Illustrator.'
  },
  {
    categories: ['design'],
    name: 'Absinthe House',
    id: 'absinthehouse',
    products: ['Logo, Menu, Website'],
    rowColor: '#050608',
    textColor: '#fff',
    homeImage: absintheHouseBlack,
    primaryImage: absintheHouseBlack,
    images: [
      '../images/mockups/absinthemenumockup.png',
      '../images/primary/absinthehousewhite.jpg',
      '../images/mockups/absinthehousesite-square.jpg'
    ],
    description: 'Absinthe House is a bar and nightclub in Boulder, Colorado. Adobe Illustrator and Adobe InDesign were used to create the vector banner and menu. The Absinthe House website was designed using Adobe Illustrator and built in Wix.'
  }
]

export const getPortfolioData = async (): Promise<PortfolioItemsResponseType> =>
  new Promise(resolve => {
    setTimeout(
      () => {
        resolve({ data: { items: portfolioItemArray } })
      },
      1000
    )
  })

Promise.resolve()