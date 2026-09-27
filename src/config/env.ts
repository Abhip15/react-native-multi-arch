import Constants from 'expo-constants';

export type AppVariant = 'development' | 'staging' | 'production';

export interface AppEnv {
  appVariant: AppVariant;
  apiUrl: string;
  googlePlacesApiKey: string;
  debugMode: boolean;
  version: string;
}

type RawEnv = Partial<Omit<AppEnv, 'version'>> & { appVariant?: string };

const rawExtra = (Constants.expoConfig?.extra ?? {}) as { env?: RawEnv };
const raw = rawExtra.env ?? {};

function normalizeVariant(value: string | undefined): AppVariant {
  switch (value) {
    case 'staging':
    case 'production':
    case 'development':
      return value;
    default:
      return 'development';
  }
}

export const Env: AppEnv = {
  appVariant: normalizeVariant(raw.appVariant),
  apiUrl: raw.apiUrl ?? '',
  googlePlacesApiKey: raw.googlePlacesApiKey ?? '',
  debugMode: raw.debugMode ?? __DEV__,
  version: Constants.expoConfig?.version ?? '0.0.0',
};

export const isProduction = Env.appVariant === 'production';
export const isStaging = Env.appVariant === 'staging';
export const isDevelopment = Env.appVariant === 'development';
