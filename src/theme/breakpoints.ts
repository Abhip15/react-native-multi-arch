export const breakpoints = {
  xs: 0, // required to start at 0
  sm: 576,
  md: 768, // tablet threshold
  lg: 992,
  xl: 1200,
} as const;

// type augmentation (once) — enables typed breakpoint keys in styles
type AppBreakpoints = typeof breakpoints;
declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
