import { css, StyleSheet } from 'aphrodite/no-important';
import t from 'tachyons-js';

const styles = StyleSheet.create( {
  NavigationItem: {
    fontFamily: 'Open Sans',
    ...t.f4,
    ...t.pr4,
  },

} );

export default ({ label }) => (
  <li className={ css( styles.NavigationItem ) }><a href="#">{ label }</a></li>
)
