import { StyleSheet } from 'react-native-unistyles';
import storage from '@shared/storage/storage';
import { StorageKeys } from '@shared/types/storage-types';
import { lightTheme, darkTheme } from './themes';
import { breakpoints } from './breakpoints';

export type ThemeMode = 'light' | 'dark' | 'system';

function getStoredMode(): ThemeMode {
  const value = storage.getString(StorageKeys.THEME_MODE);
  return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
}

const mode = getStoredMode();

StyleSheet.configure({
  themes: { light: lightTheme, dark: darkTheme },
  breakpoints, // enables responsive `{ xs, md, … }` style values
  settings:
    mode === 'system'
      ? { adaptiveThemes: true } // follow the OS
      : { adaptiveThemes: false, initialTheme: mode }, // pinned light/dark
});
