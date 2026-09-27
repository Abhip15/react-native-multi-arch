import '@theme/unistyles'; // MUST be the first import (registers themes/breakpoints)

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useUnistyles } from 'react-native-unistyles';

import { AppProviders } from '@/providers/app-providers';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { rt } = useUnistyles();
  const isDark = rt.themeName === 'dark';

  useEffect(() => {
    void SplashScreen.hideAsync();
  }, []);

  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" options={{ headerShown: true, title: 'Not found' }} />
      </Stack>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </AppProviders>
  );
}
