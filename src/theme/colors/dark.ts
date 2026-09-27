import { palette } from './palette';

export const darkColors = {
  background: { primary: '#121212', secondary: '#1E1E1E', tertiary: '#2C2C2C' },
  surface: {
    default: '#1E1E1E',
    container: '#242424',
    containerHigh: '#2C2C2C',
    overlay: 'rgba(0,0,0,0.7)',
  },
  text: {
    primary: palette.neutral[100],
    secondary: palette.neutral[400],
    tertiary: palette.neutral[500],
    disabled: palette.neutral[600],
    placeholder: palette.neutral[600],
    inverse: palette.neutral[900],
    link: palette.primary[400],
  },
  border: {
    default: palette.neutral[700],
    subtle: palette.neutral[800],
    strong: palette.neutral[500],
    focus: palette.primary[400],
  },
  outline: palette.neutral[600],

  primary: palette.primary[400],
  onPrimary: palette.neutral[1000],
  secondary: palette.neutral[300],
  onSecondary: palette.neutral[1000],

  status: {
    success: '#34D399',
    onSuccess: palette.neutral[1000],
    successContainer: '#064E3B',
    error: '#F87171',
    onError: palette.neutral[1000],
    errorContainer: '#7F1D1D',
    warning: '#FBBF24',
    onWarning: palette.neutral[1000],
    warningContainer: '#78350F',
    info: '#60A5FA',
    onInfo: palette.neutral[1000],
    infoContainer: '#1E3A8A',
  },
  interactive: {
    hover: 'rgba(255,255,255,0.08)',
    pressed: 'rgba(255,255,255,0.12)',
    focused: 'rgba(96,165,250,0.24)',
    disabled: palette.neutral[800],
  },
} as const;
