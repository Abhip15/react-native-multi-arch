# GenericApp

A production-ready React Native app built with Expo SDK 57, TypeScript, and Expo Router.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run on iOS simulator
bun run ios

# Run on Android emulator
bun run android

# Run in web browser
bun run web

# Start Metro bundler
npm start
```

## 📋 Prerequisites

- Node.js >= 20.19.4 (using v22.23.1)
- npm >= 10
- Xcode >= 26 (for iOS)
- CocoaPods >= 1.15 (for iOS)
- Watchman (recommended)

## 🛠️ Tech Stack

- **Expo SDK**: 57
- **React Native**: 0.86.0
- **React**: 19.2.3
- **TypeScript**: 6.0.3
- **Navigation**: Expo Router (file-based)
- **Build**: CNG (Continuous Native Generation)

## 📁 Project Structure

```
src/
├── app/           # Expo Router routes
├── components/    # Reusable components
├── config/        # Environment & app config
├── hooks/         # Custom hooks
├── providers/     # App-wide providers
├── theme/         # Design tokens
├── types/         # TypeScript declarations
├── features/      # Feature modules
├── shared/        # Shared code
└── utils/         # Utility functions
```

## 🎯 Features

- ✅ TypeScript with strict mode
- ✅ File-based routing (Expo Router)
- ✅ Dark/light theme support
- ✅ Environment configuration (dev/staging/prod)
- ✅ SVG as React components
- ✅ ESLint + Prettier
- ✅ React Compiler enabled
- ✅ Path aliases (@components, @config, etc.)

## 📝 Development

### Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit values as needed.

### Available Scripts

```bash
bun run lint          # Run ESLint
bun run typecheck     # Run TypeScript check
bun run format        # Format code with Prettier
bun run validate      # Lint + typecheck
bun run doctor        # Run Expo health check
bun run prebuild      # Regenerate native folders
```

### App Variants

Run with different variants:
```bash
APP_VARIANT=development bun run ios
APP_VARIANT=staging bun run ios
APP_VARIANT=production bun run ios
```

## 🔧 Configuration

- **TypeScript**: `tsconfig.json` (strict mode + path aliases)
- **Babel**: `babel.config.js` (babel-preset-expo)
- **Metro**: `metro.config.js` (SVG transformer)
- **App Config**: `app.config.ts` (dynamic, variant-aware)
- **ESLint**: `eslint.config.js` (flat config)
- **Prettier**: `.prettierrc`

## 📖 Documentation

See `SETUP_COMPLETE.md` for detailed setup information and troubleshooting.

## 🤝 Contributing

This is a template project. Feel free to modify as needed for your application.

## 📄 License

MIT
