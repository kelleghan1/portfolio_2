import { css } from 'styled-components'
import {
  SMALL_MIN,
  MEDIUM_MIN,
  LARGE_MIN,
  XLARGE_MIN
} from './utils/constants/breakpoints'

export const appStyles = css`
  background-color: #f2f2f2;

  .pure-g {
    letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
    *letter-spacing: normal; /* reset IE < 8 */
    *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */
    text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;

    /* Prevents distributing space between rows */
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
  }

  /* IE10 display: -ms-flexbox (and display: flex in IE 11) does not work inside a table; fall back to block and rely on font hack */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    table .pure-g {
      display: block;
    }
  }

  /* Opera as of 12 on Windows needs word-spacing.
    The ".opera-only" selector is used to prevent actual prefocus styling
    and is not required in markup.
  */
  .opera-only :-o-prefocus,
  .pure-g {
      word-spacing: -0.43em;
  }

  .pure-u {
    display: inline-block;
    *display: inline; /* IE < 8: fake inline-block */
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
  }

  .u-1,
  .u-1-1,
  .u-1-2,
  .u-1-3,
  .u-2-3,
  .u-1-4,
  .u-3-4,
  .u-1-5,
  .u-2-5,
  .u-3-5,
  .u-4-5,
  .u-5-5,
  .u-1-6,
  .u-5-6,
  .u-1-8,
  .u-3-8,
  .u-5-8,
  .u-7-8,
  .u-1-12,
  .u-5-12,
  .u-7-12,
  .u-11-12,
  .u-1-24,
  .u-2-24,
  .u-3-24,
  .u-4-24,
  .u-5-24,
  .u-6-24,
  .u-7-24,
  .u-8-24,
  .u-9-24,
  .u-10-24,
  .u-11-24,
  .u-12-24,
  .u-13-24,
  .u-14-24,
  .u-15-24,
  .u-16-24,
  .u-17-24,
  .u-18-24,
  .u-19-24,
  .u-20-24,
  .u-21-24,
  .u-22-24,
  .u-23-24,
  .u-24-24 {
    display: inline-block;
    *display: inline;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
  }

  .u-1-24 {
    width: 4.1667%;
    *width: 4.1357%;
  }

  .u-1-12,
  .u-2-24 {
    width: 8.3333%;
    *width: 8.3023%;
  }

  .u-1-8,
  .u-3-24 {
    width: 12.5000%;
    *width: 12.4690%;
  }

  .u-1-6,
  .u-4-24 {
    width: 16.6667%;
    *width: 16.6357%;
  }

  .u-1-5 {
    width: 20%;
    *width: 19.9690%;
  }

  .u-5-24 {
    width: 20.8333%;
    *width: 20.8023%;
  }

  .u-1-4,
  .u-6-24 {
    width: 25%;
    *width: 24.9690%;
  }

  .u-7-24 {
    width: 29.1667%;
    *width: 29.1357%;
  }

  .u-1-3,
  .u-8-24 {
    width: 33.3333%;
    *width: 33.3023%;
  }

  .u-3-8,
  .u-9-24 {
    width: 37.5000%;
    *width: 37.4690%;
  }

  .u-2-5 {
    width: 40%;
    *width: 39.9690%;
  }

  .u-5-12,
  .u-10-24 {
    width: 41.6667%;
    *width: 41.6357%;
  }

  .u-11-24 {
    width: 45.8333%;
    *width: 45.8023%;
  }

  .u-1-2,
  .u-12-24 {
    width: 50%;
    *width: 49.9690%;
  }

  .u-13-24 {
    width: 54.1667%;
    *width: 54.1357%;
  }

  .u-7-12,
  .u-14-24 {
    width: 58.3333%;
    *width: 58.3023%;
  }

  .u-3-5 {
    width: 60%;
    *width: 59.9690%;
  }

  .u-5-8,
  .u-15-24 {
    width: 62.5000%;
    *width: 62.4690%;
  }

  .u-2-3,
  .u-16-24 {
    width: 66.6667%;
    *width: 66.6357%;
  }

  .u-17-24 {
    width: 70.8333%;
    *width: 70.8023%;
  }

  .u-3-4,
  .u-18-24 {
    width: 75%;
    *width: 74.9690%;
  }

  .u-19-24 {
    width: 79.1667%;
    *width: 79.1357%;
  }

  .u-4-5 {
    width: 80%;
    *width: 79.9690%;
  }

  .u-5-6,
  .u-20-24 {
    width: 83.3333%;
    *width: 83.3023%;
  }

  .u-7-8,
  .u-21-24 {
    width: 87.5000%;
    *width: 87.4690%;
  }

  .u-11-12,
  .u-22-24 {
    width: 91.6667%;
    *width: 91.6357%;
  }

  .u-23-24 {
    width: 95.8333%;
    *width: 95.8023%;
  }

  .u-1,
  .u-1-1,
  .u-5-5,
  .u-24-24 {
    width: 100%;
  }

  @media screen and (min-width: ${SMALL_MIN}) {
    .u-sm-1,
    .u-sm-1-1,
    .u-sm-1-2,
    .u-sm-1-3,
    .u-sm-2-3,
    .u-sm-1-4,
    .u-sm-3-4,
    .u-sm-1-5,
    .u-sm-2-5,
    .u-sm-3-5,
    .u-sm-4-5,
    .u-sm-5-5,
    .u-sm-1-6,
    .u-sm-5-6,
    .u-sm-1-8,
    .u-sm-3-8,
    .u-sm-5-8,
    .u-sm-7-8,
    .u-sm-1-12,
    .u-sm-5-12,
    .u-sm-7-12,
    .u-sm-11-12,
    .u-sm-1-24,
    .u-sm-2-24,
    .u-sm-3-24,
    .u-sm-4-24,
    .u-sm-5-24,
    .u-sm-6-24,
    .u-sm-7-24,
    .u-sm-8-24,
    .u-sm-9-24,
    .u-sm-10-24,
    .u-sm-11-24,
    .u-sm-12-24,
    .u-sm-13-24,
    .u-sm-14-24,
    .u-sm-15-24,
    .u-sm-16-24,
    .u-sm-17-24,
    .u-sm-18-24,
    .u-sm-19-24,
    .u-sm-20-24,
    .u-sm-21-24,
    .u-sm-22-24,
    .u-sm-23-24,
    .u-sm-24-24 {
      display: inline-block;
      *display: inline;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .u-sm-1-24 {
      width: 4.1667%;
      *width: 4.1357%;
    }

    .u-sm-1-12,
    .u-sm-2-24 {
      width: 8.3333%;
      *width: 8.3023%;
    }

    .u-sm-1-8,
    .u-sm-3-24 {
      width: 12.5000%;
      *width: 12.4690%;
    }

    .u-sm-1-6,
    .u-sm-4-24 {
      width: 16.6667%;
      *width: 16.6357%;
    }

    .u-sm-1-5 {
      width: 20%;
      *width: 19.9690%;
    }

    .u-sm-5-24 {
      width: 20.8333%;
      *width: 20.8023%;
    }

    .u-sm-1-4,
    .u-sm-6-24 {
      width: 25%;
      *width: 24.9690%;
    }

    .u-sm-7-24 {
      width: 29.1667%;
      *width: 29.1357%;
    }

    .u-sm-1-3,
    .u-sm-8-24 {
      width: 33.3333%;
      *width: 33.3023%;
    }

    .u-sm-3-8,
    .u-sm-9-24 {
      width: 37.5000%;
      *width: 37.4690%;
    }

    .u-sm-2-5 {
      width: 40%;
      *width: 39.9690%;
    }

    .u-sm-5-12,
    .u-sm-10-24 {
      width: 41.6667%;
      *width: 41.6357%;
    }

    .u-sm-11-24 {
      width: 45.8333%;
      *width: 45.8023%;
    }

    .u-sm-1-2,
    .u-sm-12-24 {
      width: 50%;
      *width: 49.9690%;
    }

    .u-sm-13-24 {
      width: 54.1667%;
      *width: 54.1357%;
    }

    .u-sm-7-12,
    .u-sm-14-24 {
      width: 58.3333%;
      *width: 58.3023%;
    }

    .u-sm-3-5 {
      width: 60%;
      *width: 59.9690%;
    }

    .u-sm-5-8,
    .u-sm-15-24 {
      width: 62.5000%;
      *width: 62.4690%;
    }

    .u-sm-2-3,
    .u-sm-16-24 {
      width: 66.6667%;
      *width: 66.6357%;
    }

    .u-sm-17-24 {
      width: 70.8333%;
      *width: 70.8023%;
    }

    .u-sm-3-4,
    .u-sm-18-24 {
      width: 75%;
      *width: 74.9690%;
    }

    .u-sm-19-24 {
      width: 79.1667%;
      *width: 79.1357%;
    }

    .u-sm-4-5 {
      width: 80%;
      *width: 79.9690%;
    }

    .u-sm-5-6,
    .u-sm-20-24 {
      width: 83.3333%;
      *width: 83.3023%;
    }

    .u-sm-7-8,
    .u-sm-21-24 {
      width: 87.5000%;
      *width: 87.4690%;
    }

    .u-sm-11-12,
    .u-sm-22-24 {
      width: 91.6667%;
      *width: 91.6357%;
    }

    .u-sm-23-24 {
      width: 95.8333%;
      *width: 95.8023%;
    }

    .u-sm-1,
    .u-sm-1-1,
    .u-sm-5-5,
    .u-sm-24-24 {
      width: 100%;
    }
  }

  @media screen and (min-width: ${MEDIUM_MIN}) {
    .u-md-1,
    .u-md-1-1,
    .u-md-1-2,
    .u-md-1-3,
    .u-md-2-3,
    .u-md-1-4,
    .u-md-3-4,
    .u-md-1-5,
    .u-md-2-5,
    .u-md-3-5,
    .u-md-4-5,
    .u-md-5-5,
    .u-md-1-6,
    .u-md-5-6,
    .u-md-1-8,
    .u-md-3-8,
    .u-md-5-8,
    .u-md-7-8,
    .u-md-1-12,
    .u-md-5-12,
    .u-md-7-12,
    .u-md-11-12,
    .u-md-1-24,
    .u-md-2-24,
    .u-md-3-24,
    .u-md-4-24,
    .u-md-5-24,
    .u-md-6-24,
    .u-md-7-24,
    .u-md-8-24,
    .u-md-9-24,
    .u-md-10-24,
    .u-md-11-24,
    .u-md-12-24,
    .u-md-13-24,
    .u-md-14-24,
    .u-md-15-24,
    .u-md-16-24,
    .u-md-17-24,
    .u-md-18-24,
    .u-md-19-24,
    .u-md-20-24,
    .u-md-21-24,
    .u-md-22-24,
    .u-md-23-24,
    .u-md-24-24 {
      display: inline-block;
      *display: inline;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .u-md-1-24 {
      width: 4.1667%;
      *width: 4.1357%;
    }

    .u-md-1-12,
    .u-md-2-24 {
      width: 8.3333%;
      *width: 8.3023%;
    }

    .u-md-1-8,
    .u-md-3-24 {
      width: 12.5000%;
      *width: 12.4690%;
    }

    .u-md-1-6,
    .u-md-4-24 {
      width: 16.6667%;
      *width: 16.6357%;
    }

    .u-md-1-5 {
      width: 20%;
      *width: 19.9690%;
    }

    .u-md-5-24 {
      width: 20.8333%;
      *width: 20.8023%;
    }

    .u-md-1-4,
    .u-md-6-24 {
      width: 25%;
      *width: 24.9690%;
    }

    .u-md-7-24 {
      width: 29.1667%;
      *width: 29.1357%;
    }

    .u-md-1-3,
    .u-md-8-24 {
      width: 33.3333%;
      *width: 33.3023%;
    }

    .u-md-3-8,
    .u-md-9-24 {
      width: 37.5000%;
      *width: 37.4690%;
    }

    .u-md-2-5 {
      width: 40%;
      *width: 39.9690%;
    }

    .u-md-5-12,
    .u-md-10-24 {
      width: 41.6667%;
      *width: 41.6357%;
    }

    .u-md-11-24 {
      width: 45.8333%;
      *width: 45.8023%;
    }

    .u-md-1-2,
    .u-md-12-24 {
      width: 50%;
      *width: 49.9690%;
    }

    .u-md-13-24 {
      width: 54.1667%;
      *width: 54.1357%;
    }

    .u-md-7-12,
    .u-md-14-24 {
      width: 58.3333%;
      *width: 58.3023%;
    }

    .u-md-3-5 {
      width: 60%;
      *width: 59.9690%;
    }

    .u-md-5-8,
    .u-md-15-24 {
      width: 62.5000%;
      *width: 62.4690%;
    }

    .u-md-2-3,
    .u-md-16-24 {
      width: 66.6667%;
      *width: 66.6357%;
    }

    .u-md-17-24 {
      width: 70.8333%;
      *width: 70.8023%;
    }

    .u-md-3-4,
    .u-md-18-24 {
      width: 75%;
      *width: 74.9690%;
    }

    .u-md-19-24 {
      width: 79.1667%;
      *width: 79.1357%;
    }

    .u-md-4-5 {
      width: 80%;
      *width: 79.9690%;
    }

    .u-md-5-6,
    .u-md-20-24 {
      width: 83.3333%;
      *width: 83.3023%;
    }

    .u-md-7-8,
    .u-md-21-24 {
      width: 87.5000%;
      *width: 87.4690%;
    }

    .u-md-11-12,
    .u-md-22-24 {
      width: 91.6667%;
      *width: 91.6357%;
    }

    .u-md-23-24 {
      width: 95.8333%;
      *width: 95.8023%;
    }

    .u-md-1,
    .u-md-1-1,
    .u-md-5-5,
    .u-md-24-24 {
      width: 100%;
    }
  }

  @media screen and (min-width: ${LARGE_MIN}) {
    .u-lg-1,
    .u-lg-1-1,
    .u-lg-1-2,
    .u-lg-1-3,
    .u-lg-2-3,
    .u-lg-1-4,
    .u-lg-3-4,
    .u-lg-1-5,
    .u-lg-2-5,
    .u-lg-3-5,
    .u-lg-4-5,
    .u-lg-5-5,
    .u-lg-1-6,
    .u-lg-5-6,
    .u-lg-1-8,
    .u-lg-3-8,
    .u-lg-5-8,
    .u-lg-7-8,
    .u-lg-1-12,
    .u-lg-5-12,
    .u-lg-7-12,
    .u-lg-11-12,
    .u-lg-1-24,
    .u-lg-2-24,
    .u-lg-3-24,
    .u-lg-4-24,
    .u-lg-5-24,
    .u-lg-6-24,
    .u-lg-7-24,
    .u-lg-8-24,
    .u-lg-9-24,
    .u-lg-10-24,
    .u-lg-11-24,
    .u-lg-12-24,
    .u-lg-13-24,
    .u-lg-14-24,
    .u-lg-15-24,
    .u-lg-16-24,
    .u-lg-17-24,
    .u-lg-18-24,
    .u-lg-19-24,
    .u-lg-20-24,
    .u-lg-21-24,
    .u-lg-22-24,
    .u-lg-23-24,
    .u-lg-24-24 {
      display: inline-block;
      *display: inline;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .u-lg-1-24 {
      width: 4.1667%;
      *width: 4.1357%;
    }

    .u-lg-1-12,
    .u-lg-2-24 {
      width: 8.3333%;
      *width: 8.3023%;
    }

    .u-lg-1-8,
    .u-lg-3-24 {
      width: 12.5000%;
      *width: 12.4690%;
    }

    .u-lg-1-6,
    .u-lg-4-24 {
      width: 16.6667%;
      *width: 16.6357%;
    }

    .u-lg-1-5 {
      width: 20%;
      *width: 19.9690%;
    }

    .u-lg-5-24 {
      width: 20.8333%;
      *width: 20.8023%;
    }

    .u-lg-1-4,
    .u-lg-6-24 {
      width: 25%;
      *width: 24.9690%;
    }

    .u-lg-7-24 {
      width: 29.1667%;
      *width: 29.1357%;
    }

    .u-lg-1-3,
    .u-lg-8-24 {
      width: 33.3333%;
      *width: 33.3023%;
    }

    .u-lg-3-8,
    .u-lg-9-24 {
      width: 37.5000%;
      *width: 37.4690%;
    }

    .u-lg-2-5 {
      width: 40%;
      *width: 39.9690%;
    }

    .u-lg-5-12,
    .u-lg-10-24 {
      width: 41.6667%;
      *width: 41.6357%;
    }

    .u-lg-11-24 {
      width: 45.8333%;
      *width: 45.8023%;
    }

    .u-lg-1-2,
    .u-lg-12-24 {
      width: 50%;
      *width: 49.9690%;
    }

    .u-lg-13-24 {
      width: 54.1667%;
      *width: 54.1357%;
    }

    .u-lg-7-12,
    .u-lg-14-24 {
      width: 58.3333%;
      *width: 58.3023%;
    }

    .u-lg-3-5 {
      width: 60%;
      *width: 59.9690%;
    }

    .u-lg-5-8,
    .u-lg-15-24 {
      width: 62.5000%;
      *width: 62.4690%;
    }

    .u-lg-2-3,
    .u-lg-16-24 {
      width: 66.6667%;
      *width: 66.6357%;
    }

    .u-lg-17-24 {
      width: 70.8333%;
      *width: 70.8023%;
    }

    .u-lg-3-4,
    .u-lg-18-24 {
      width: 75%;
      *width: 74.9690%;
    }

    .u-lg-19-24 {
      width: 79.1667%;
      *width: 79.1357%;
    }

    .u-lg-4-5 {
      width: 80%;
      *width: 79.9690%;
    }

    .u-lg-5-6,
    .u-lg-20-24 {
      width: 83.3333%;
      *width: 83.3023%;
    }

    .u-lg-7-8,
    .u-lg-21-24 {
      width: 87.5000%;
      *width: 87.4690%;
    }

    .u-lg-11-12,
    .u-lg-22-24 {
      width: 91.6667%;
      *width: 91.6357%;
    }

    .u-lg-23-24 {
      width: 95.8333%;
      *width: 95.8023%;
    }

    .u-lg-1,
    .u-lg-1-1,
    .u-lg-5-5,
    .u-lg-24-24 {
      width: 100%;
    }
  }

  @media screen and (min-width: ${XLARGE_MIN}) {
    .u-xl-1,
    .u-xl-1-1,
    .u-xl-1-2,
    .u-xl-1-3,
    .u-xl-2-3,
    .u-xl-1-4,
    .u-xl-3-4,
    .u-xl-1-5,
    .u-xl-2-5,
    .u-xl-3-5,
    .u-xl-4-5,
    .u-xl-5-5,
    .u-xl-1-6,
    .u-xl-5-6,
    .u-xl-1-8,
    .u-xl-3-8,
    .u-xl-5-8,
    .u-xl-7-8,
    .u-xl-1-12,
    .u-xl-5-12,
    .u-xl-7-12,
    .u-xl-11-12,
    .u-xl-1-24,
    .u-xl-2-24,
    .u-xl-3-24,
    .u-xl-4-24,
    .u-xl-5-24,
    .u-xl-6-24,
    .u-xl-7-24,
    .u-xl-8-24,
    .u-xl-9-24,
    .u-xl-10-24,
    .u-xl-11-24,
    .u-xl-12-24,
    .u-xl-13-24,
    .u-xl-14-24,
    .u-xl-15-24,
    .u-xl-16-24,
    .u-xl-17-24,
    .u-xl-18-24,
    .u-xl-19-24,
    .u-xl-20-24,
    .u-xl-21-24,
    .u-xl-22-24,
    .u-xl-23-24,
    .u-xl-24-24 {
      display: inline-block;
      *display: inline;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .u-xl-1-24 {
      width: 4.1667%;
      *width: 4.1357%;
    }

    .u-xl-1-12,
    .u-xl-2-24 {
      width: 8.3333%;
      *width: 8.3023%;
    }

    .u-xl-1-8,
    .u-xl-3-24 {
      width: 12.5000%;
      *width: 12.4690%;
    }

    .u-xl-1-6,
    .u-xl-4-24 {
      width: 16.6667%;
      *width: 16.6357%;
    }

    .u-xl-1-5 {
      width: 20%;
      *width: 19.9690%;
    }

    .u-xl-5-24 {
      width: 20.8333%;
      *width: 20.8023%;
    }

    .u-xl-1-4,
    .u-xl-6-24 {
      width: 25%;
      *width: 24.9690%;
    }

    .u-xl-7-24 {
      width: 29.1667%;
      *width: 29.1357%;
    }

    .u-xl-1-3,
    .u-xl-8-24 {
      width: 33.3333%;
      *width: 33.3023%;
    }

    .u-xl-3-8,
    .u-xl-9-24 {
      width: 37.5000%;
      *width: 37.4690%;
    }

    .u-xl-2-5 {
      width: 40%;
      *width: 39.9690%;
    }

    .u-xl-5-12,
    .u-xl-10-24 {
      width: 41.6667%;
      *width: 41.6357%;
    }

    .u-xl-11-24 {
      width: 45.8333%;
      *width: 45.8023%;
    }

    .u-xl-1-2,
    .u-xl-12-24 {
      width: 50%;
      *width: 49.9690%;
    }

    .u-xl-13-24 {
      width: 54.1667%;
      *width: 54.1357%;
    }

    .u-xl-7-12,
    .u-xl-14-24 {
      width: 58.3333%;
      *width: 58.3023%;
    }

    .u-xl-3-5 {
      width: 60%;
      *width: 59.9690%;
    }

    .u-xl-5-8,
    .u-xl-15-24 {
      width: 62.5000%;
      *width: 62.4690%;
    }

    .u-xl-2-3,
    .u-xl-16-24 {
      width: 66.6667%;
      *width: 66.6357%;
    }

    .u-xl-17-24 {
      width: 70.8333%;
      *width: 70.8023%;
    }

    .u-xl-3-4,
    .u-xl-18-24 {
      width: 75%;
      *width: 74.9690%;
    }

    .u-xl-19-24 {
      width: 79.1667%;
      *width: 79.1357%;
    }

    .u-xl-4-5 {
      width: 80%;
      *width: 79.9690%;
    }

    .u-xl-5-6,
    .u-xl-20-24 {
      width: 83.3333%;
      *width: 83.3023%;
    }

    .u-xl-7-8,
    .u-xl-21-24 {
      width: 87.5000%;
      *width: 87.4690%;
    }

    .u-xl-11-12,
    .u-xl-22-24 {
      width: 91.6667%;
      *width: 91.6357%;
    }

    .u-xl-23-24 {
      width: 95.8333%;
      *width: 95.8023%;
    }

    .u-xl-1,
    .u-xl-1-1,
    .u-xl-5-5,
    .u-xl-24-24 {
      width: 100%;
    }
  }
`
