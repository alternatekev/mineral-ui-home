import t from 'tachyons-js';
import Color from 'color';
import { css, StyleSheet } from 'aphrodite/no-important';
import Button from 'mineral-ui/Button';

import Navigation from '../Navigation';

const animations = {
  GridItem: {
    from: {
      opacity: 0.05,
      transform: 'skew( -15deg ) scale( 1 )',
    },
    to: {
      opacity: 0.2,
      transform: 'skew( -15deg ) scale( 2 ) perspective( 50px )',
    }
  },
  Header: {
    to: {
      transform: 'skew( -15deg ) scale( 2 ) perspective( 50px )',
    }
  }
};

const styles = StyleSheet.create( {
  Header: {
    ...t.flex,
    ...t.flex_wrap,
    ...t.overflow_hidden,
    ...t.fixed,
    height: '80vh',
    width: '100vw',
    zIndex: '1',
    transform: 'perspective( 50px )',
    borderBottom: '1px #CCC solid',
    animationName: animations.Header,
    animationDuration: '45s',
    animationFillMode: 'forwards',
    transformStyle: 'preserve-3d',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'linear',
  },
  GridItem: {
    ...t.relative,
    opacity: 0.05,
    transition: 'all 500ms linear',
    transform: 'skew( -15deg ) scale( 1 ) ',
    width: '15%',
    animationName: animations.GridItem,
    animationFillMode: 'forwards',
    transformStyle: 'preserve-3d',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  HeaderContainer: {
    ...t.overflow_hidden,
    backgroundColor: '#E07C56',
  },
  Logo: {
    width: 75,
  },
  LogoContainer: {
    ...t.pb1,
    ...t.block,
  },
  HeaderContent: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: '5vh',
    marginBottom: 50,
    fontFamily: 'Open Sans',
    ...t.relative,
    zIndex: 200,
  },
  h1: {
    ...t.fw6,
    ...t.f4,
    ...t.dib,
    ...t.pa1,
    ...t.pr2,
    ...t.pl2,
    ...t.br3,
    opacity: '0.75',
    backgroundColor: 'rgba(232,180,87, 0.75)',
    color: '#FFF',
    marginTop: '30vh',
  },
  h2: {
    ...t.fw1,
    color: '#FFF'
  },
  p: {
    ...t.fw3,
    ...t.f3,
    ...t.mb5,
    maxWidth: '60vw',
    color: 'rgba(255,255,255,0.75)'
  },
  Mask: {
    ...t.overflow_hidden,
    width: '100vw',
    height: '100vh',
    clipPath: 'polygon(100% 0, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 0)'
  },

} );

export default class Header extends React.Component {

  shouldComponentUpdate = () => {
    return false;
  }

  randomColor = () => {

    const thisColor = Color( {
      b: Math.floor( Math.random() * 100),
      g: Math.floor( Math.random() * 10),
      r: Math.floor( Math.random() * 255),
    } )

    return thisColor.rgb().string()
  }

  populate = () => {
    let grid = [];
    for( let i = 0; i < 20; i++ ) {

      let thisColor;

      if( ( i / Math.floor( Math.random() * 37 ) )%1 == 0 ) {
        thisColor = '#fff';
      } else {
        thisColor =  this.randomColor();
      }

      grid.push(
        <div
          className={ css( styles.GridItem ) }
          style={ {
            background: thisColor,
            animationDuration: `${Math.floor( Math.random() * ( 29100 - 10000 ) + 10000 )}ms`,
            animationDelay: `${Math.floor( Math.random() * ( 10000 - 5000 ) + 5000 )}ms` } }>
        </div>
      );
    }
    return grid;
  }

  render() {
    return(
        <div className={ css( styles.HeaderContainer ) }>

          <div className={ css( styles.Header ) }>
            { this.populate() }
          </div>

          <div className={ css( styles.HeaderContent ) }>
            <div className={ css( styles.LogoContainer ) }><img src="/static/logo.svg" className={ css( styles.Logo ) } /></div>
            <Navigation />
            <h1 className={ css( styles.h1 ) }>Design System & React Components for the Enterprise</h1>
            <h2 className={ css( styles.h2 ) }>MNRLUI provides the building blocks for a beautiful, standardized application.</h2>
            <p className={ css( styles.p ) }>Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.</p>

            <Button primary>Get Started</Button>
            <Button secondary>View the Components</Button>

          </div>
          <div style={{
              backgroundColor: '#fff',
              height: '200vh',
              ...t.relative,
              zIndex: 100,
            }}></div>
        </div>

    );
  }
}
