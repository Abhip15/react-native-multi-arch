// New theming system exports
export { getThemeMode, setThemeMode, type ThemeMode } from './theme-controller';
export { darkTheme, lightTheme, type AppTheme } from './themes';

// Legacy exports for backward compatibility (will be migrated gradually)
export * from './theme';
