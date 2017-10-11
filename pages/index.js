import AnimatedLogo from '../components/AnimatedLogo';
import Header from '../components/Header';
import {StyleSheet} from 'aphrodite/no-important';
import ThemeProvider from 'mineral-ui/ThemeProvider';

if (typeof window !== 'undefined') {
  /* StyleSheet.rehydrate takes an array of rendered classnames,
  and ensures that the client side render doesn't generate
  duplicate style definitions in the <style data-aphrodite> tag */
  StyleSheet.rehydrate(window.__NEXT_DATA__.ids)
}

export default class Index extends React.Component {

  render() {
    return(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
  }
}
