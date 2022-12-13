import 'styled-components';
import { defaultTheme } from '../styles/themes/default/default';
import { darkTheme } from '../styles/themes/dark/dark';

type DefaultThemeType = typeof defaultTheme;
type DarkThemeType = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType, DarkThemeType {}
}
