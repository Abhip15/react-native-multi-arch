import type { ConfigContext, ExpoConfig } from 'expo/config';

type AppVariant = 'development' | 'staging' | 'production';

const APP_VARIANT = (process.env.APP_VARIANT as AppVariant) ?? 'development';

const VARIANTS: Record<AppVariant, { name: string; identifier: string; scheme: string }> = {
  development: {
    name: 'GenericApp (Dev)',
    identifier: 'com.generic.app',
    scheme: 'genericapp-dev',
  },
  staging: {
    name: 'GenericApp (Staging)',
    identifier: 'com.generic.app',
    scheme: 'genericapp-staging',
  },
  production: {
    name: 'GenericApp',
    identifier: 'com.generic.app',
    scheme: 'genericapp',
  },
};

const variant = VARIANTS[APP_VARIANT];

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: variant.name,
  slug: 'genericapp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: variant.scheme,
  userInterfaceStyle: 'automatic',
  ios: {
    bundleIdentifier: variant.identifier,
    supportsTablet: true,
    // Add NSLocationWhenInUse..., NSCamera..., NSFaceID..., NSLocalNetwork...,
    // NSBonjourServices, etc. via `infoPlist` when wiring native libs (Phase 5).
  },
  android: {
    package: variant.identifier,
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    predictiveBackGestureEnabled: false,
    // Add runtime permissions (ACCESS_FINE_LOCATION, CAMERA, ...) here in Phase 5.
  },
  web: { output: 'static', favicon: './assets/images/favicon.png' },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      { backgroundColor: '#208AEF', image: './assets/images/splash-icon.png', imageWidth: 76 },
    ],
    'react-native-edge-to-edge',
  ],
  experiments: { typedRoutes: true, reactCompiler: true },
  extra: {
    ...config.extra,
    env: {
      appVariant: APP_VARIANT,
      apiUrl: process.env.EXPO_PUBLIC_API_URL ?? process.env.API_URL ?? '',
      googlePlacesApiKey:
        process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY ?? process.env.GOOGLE_PLACES_API_KEY ?? '',
      debugMode: (process.env.EXPO_PUBLIC_DEBUG_MODE ?? process.env.DEBUG_MODE) === 'true',
    },
    // eas: { projectId: '<set by `eas init`>' },
  },
});
