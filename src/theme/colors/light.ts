import { palette } from './palette';

export const lightColors = {
  background: {
    primary: palette.neutral[0],
    secondary: palette.neutral[50],
    tertiary: palette.neutral[100],
  },
  surface: {
    default: palette.neutral[0],
    container: palette.neutral[50],
    containerHigh: palette.neutral[100],
    overlay: 'rgba(0,0,0,0.5)',
  },
  text: {
    primary: palette.neutral[900],
    secondary: palette.neutral[600],
    tertiary: palette.neutral[500],
    disabled: palette.neutral[400],
    placeholder: palette.neutral[400],
    inverse: palette.neutral[0],
    link: palette.primary[600],
  },
  border: {
    default: palette.neutral[200],
    subtle: palette.neutral[100],
    strong: palette.neutral[400],
    focus: palette.primary[500],
  },
  outline: palette.neutral[300],

  primary: palette.primary[500],
  onPrimary: palette.neutral[0],
  secondary: palette.neutral[700],
  onSecondary: palette.neutral[0],

  status: {
    success: palette.success,
    onSuccess: palette.neutral[0],
    successContainer: '#D1FAE5',
    error: palette.error,
    onError: palette.neutral[0],
    errorContainer: '#FEE2E2',
    warning: palette.warning,
    onWarning: palette.neutral[1000],
    warningContainer: '#FEF3C7',
    info: palette.info,
    onInfo: palette.neutral[0],
    infoContainer: '#DBEAFE',
  },
  interactive: {
    hover: 'rgba(0,0,0,0.04)',
    pressed: 'rgba(0,0,0,0.08)',
    focused: 'rgba(59,130,246,0.12)',
    disabled: palette.neutral[100],
  },
} as const;
