/* eslint-disable babel/no-unused-expressions */
import {injectGlobal} from 'emotion'

import rationalLight from './assets/fonts/RationalDisplay-Light.woff'
import rationalLightEot from './assets/fonts/RationalDisplay-Light.eot'
import rationalLightOtf from './assets/fonts/RationalDisplay-Light.otf'
import rationalLightTtf from './assets/fonts/RationalDisplay-Light.ttf'
import rationalLightSvg from './assets/fonts/RationalDisplay-Light.svg'

import rationalMedium from './assets/fonts/RationalDisplay-Medium.woff'
import rationalMediumEot from './assets/fonts/RationalDisplay-Medium.eot'
import rationalMediumOtf from './assets/fonts/RationalDisplay-Medium.otf'
import rationalMediumTtf from './assets/fonts/RationalDisplay-Medium.ttf'
import rationalMediumSvg from './assets/fonts/RationalDisplay-Medium.svg'

injectGlobal`
  @font-face {
    font-family: 'Rational-Medium';
    src: url('${rationalMediumEot}?#iefix') format('embedded-opentype'),
      url(${rationalMediumOtf})  format('opentype'),
      url(${rationalMedium}) format('woff'),
      url(${rationalMediumTtf})  format('truetype'),
      url('${rationalMediumSvg}#DINPro-Medium') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Rational-Light';
    src: url('${rationalLightEot}?#iefix') format('embedded-opentype'),
      url(${rationalLightOtf})  format('opentype'),
      url(${rationalLight}) format('woff'),
      url(${rationalLightTtf})  format('truetype'),
      url('${rationalLightSvg}#DINPro-Light') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`
