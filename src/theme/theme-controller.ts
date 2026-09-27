import { UnistylesRuntime } from 'react-native-unistyles';
import storage from '@shared/storage/storage';
import { StorageKeys } from '@shared/types/storage-types';
import type { ThemeMode } from './unistyles';

export type { ThemeMode };

export function getThemeMode(): ThemeMode {
  const value = storage.getString(StorageKeys.THEME_MODE);
  return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
}

export function setThemeMode(mode: ThemeMode): void {
  storage.set(StorageKeys.THEME_MODE, mode);

  if (mode === 'system') {
    UnistylesRuntime.setAdaptiveThemes(true); // resume following the OS
  } else {
    UnistylesRuntime.setAdaptiveThemes(false); // stop following the OS
    UnistylesRuntime.setTheme(mode); // pin light/dark
  }
}
