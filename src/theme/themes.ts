import { lightColors, darkColors } from './colors';
import { staticTokens } from './tokens';

export const lightTheme = { colors: lightColors, ...staticTokens } as const;
export const darkTheme = { colors: darkColors, ...staticTokens } as const;

// Single source of truth for the theme type — derived, never hand-written.
export type AppTheme = typeof lightTheme;

// Register theme types with Unistyles (enables autocomplete on `theme.*`).
declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: typeof lightTheme;
    dark: typeof darkTheme;
  }
}
