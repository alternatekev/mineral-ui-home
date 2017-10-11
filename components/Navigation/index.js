import { css, StyleSheet } from 'aphrodite/no-important';
import t from 'tachyons-js';

import NavigationItem from './NavigationItem';

const styles = StyleSheet.create( {
  Navigation: {
    ...t.absolute,
    right: 0,
    top: -15,
  },
  NavigationList: {
    ...t.flex,
    ...t.list,
    color: '#fff',
  }

} );

export default () => (
  <nav className={ css( styles.Navigation ) }>
    <ul className={ css( styles.NavigationList ) }>
      <NavigationItem label="Getting Started" />
      <NavigationItem label="Color" />
      <NavigationItem label="Typography" />
      <NavigationItem label="Theming" />
      <NavigationItem label="Components" />
    </ul>
  </nav>
)
