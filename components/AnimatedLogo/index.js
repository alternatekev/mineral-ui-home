import t from 'tachyons-js';
import { css, StyleSheet } from 'aphrodite/no-important';

const animations = {
  TopBar: {
    'from': {
      transform: 'translate(-50px,50px)'
    },
    'to': {
      transform: 'translate(0,0)'
    }
  },
  Line: {
    'from': {
      transform: 'translate(-50px,0)',
    },
    'to': {
      transform: 'translate(0,0)',
    }
  }
};

const styles = StyleSheet.create( {
  AnimatedLogo: {
    ...t.absolute,
    top: 0,
    height: 100,
  },
  AnimatedLogoContainer: {
    ...t.flex,
    ...t.justify_center,
    ...t.mt4,
  },
  TopBar: {
    animationName: animations.TopBar,
    animationDuration: '1500ms',

  },
  BottomBar: {
    animationName: animations.TopBar,
    animationDuration: '1800ms',
      animationDelay: '500ms'
  },
  MiddleBar: {
    animationName: animations.TopBar,
    animationDuration: '1500ms',
      animationDelay: '200ms'
  },
  Line: {
    ...t.relative,
    animationName: animations.Line,
    animationDuration: '1500ms',
    animationDelay: '500ms',
  },
  
} );

export default () => (
  <div className={ css( styles.AnimatedLogoContainer ) }>
    <svg className={ css( styles.AnimatedLogo ) } viewBox="0 0 50 63" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <polygon id="path-1" points="0 42 18 8 30 0 49 42 36 63 13 63 0 45"></polygon>
            <linearGradient x1="19.3234707%" y1="90.7150225%" x2="106.838015%" y2="-14.9019947%" id="linearGradient-3">
                <stop stopColor="#FFF" offset="0%"></stop>
                <stop stopColor="#98D645" offset="24.5593736%"></stop>
                <stop stopColor="#429321" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="80.5518617%" y1="10.6773709%" x2="25.1267453%" y2="81.3165488%" id="linearGradient-4">
                <stop stopColor="#3023AE" offset="0%"></stop>
                <stop stopColor="#FFF" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="16.8737533%" y1="93.0767194%" x2="84.1464428%" y2="15.1250912%" id="linearGradient-5">
                <stop stopColor="#FFF" offset="0%"></stop>
                <stop stopColor="#F76B1C" offset="100%"></stop>
            </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Desktop-HD" transform="translate(-493.000000, -519.000000)">
              <g id="Logo" transform="translate(493.000000, 519.000000)">
                  <mask id="mask-3" fill="white">
                      <use xlinkHref="#path-1"></use>
                  </mask>
                  <clipPath id="mask-2" fill="white">
                      <use xlinkHref="#path-1"></use>
                  </clipPath>
                  <g id="outer-shape" clipPath="url(#mask-2)">
                    <polygon className={ css( styles.TopBar ) } id="top-bar" fill="url(#linearGradient-3)" points="26 -8 37 -1 1.0330423 60.723759 -10 54.3538291"></polygon>
                    <polygon className={ css( styles.BottomBar ) } id="bottom-bar" fill="url(#linearGradient-4)" points="51 12 62 19 26.0330423 80.723759 15 74.3538291"></polygon>
                    <polygon className={ css( styles.Line ) } id="line" fill="#FFFFFF" fillRule="nonzero" points="50 42 0 42 0 45 50 45"></polygon>
                    <polygon className={ css( styles.MiddleBar ) } id="middle-bar" fill="url(#linearGradient-5)" points="38 3 49 10 13.0330423 71.723759 2 65.3538291"></polygon>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  </div>
)
