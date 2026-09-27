# Theming System Documentation

## Overview

This app uses **react-native-unistyles v3** as the theming engine, providing:
- ✅ **Zero-flash theme switching** - MMKV persistence ensures correct theme on launch
- ✅ **Type-safe styling** - Full TypeScript autocomplete for theme tokens
- ✅ **Responsive design** - Built-in breakpoints for phone/tablet layouts
- ✅ **Live theme updates** - Changes apply instantly without app restart
- ✅ **System theme support** - Automatically follows OS appearance settings

## Installation Complete

All dependencies have been installed and configured:
- `react-native-unistyles@3.3.0`
- `react-native-nitro-modules@0.36.1`
- `react-native-edge-to-edge@1.8.1`
- `react-native-mmkv@4.3.2`
- `@react-navigation/native@7.3.14`

## Project Structure

```
src/theme/
├── tokens/                  # Static design tokens (same in all themes)
│   ├── spacing.ts          # 0-16 scale (0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64)
│   ├── typography.ts       # Font families, sizes, weights, line heights, variants
│   ├── radii.ts            # Border radius values (none, sm, md, lg, xl, 2xl, full)
│   ├── shadows.ts          # Shadow presets (none, sm, md, lg)
│   ├── animation.ts        # Duration and easing values
│   └── index.ts            # Barrel export as `staticTokens`
├── colors/                  # Theme-specific colors
│   ├── palette.ts          # Raw color values (primary, neutral, success, error, etc.)
│   ├── light.ts            # Light theme semantic colors
│   ├── dark.ts             # Dark theme semantic colors
│   └── index.ts            # Barrel exports
├── breakpoints.ts          # Screen size breakpoints (xs: 0, sm: 576, md: 768, lg: 992, xl: 1200)
├── responsive.ts           # Optional wp/hp helpers
├── themes.ts               # lightTheme + darkTheme composition + type augmentation
├── unistyles.ts            # StyleSheet.configure (import FIRST in app)
├── theme-controller.ts     # getThemeMode/setThemeMode functions
├── navigation-theme.ts     # Maps AppTheme → React Navigation theme
├── theme.ts                # LEGACY - Compatibility shim (to be migrated)
└── index.ts                # Public API exports
```

## Usage

### 1. Basic Styling

```tsx
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.spacing[4],
    backgroundColor: theme.colors.background.primary,
    borderRadius: theme.radii.lg,
  },
  title: {
    ...theme.typography.variants.h1,
    color: theme.colors.text.primary,
  },
}));
```

### 2. Responsive Layouts (Breakpoints)

```tsx
const styles = StyleSheet.create((theme) => ({
  container: {
    // Stack on phone, side-by-side on tablet
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: theme.spacing[2], md: theme.spacing[6] },
  },
  card: {
    // 1 per row on phone, 2 on tablet, 3 on desktop
    width: { xs: '100%', md: '48%', lg: '31%' },
  },
}));
```

### 3. Runtime Values

```tsx
const styles = StyleSheet.create((theme, rt) => ({
  screen: {
    paddingTop: rt.insets.top + theme.spacing[2], // Safe area padding
    paddingBottom: rt.insets.bottom,
  },
  hero: {
    height: rt.screen.height * 0.5, // 50% of screen height
  },
  hairline: {
    borderBottomWidth: 1 / rt.pixelRatio, // 1px at any density
  },
}));
```

Available on `rt`: `screen`, `insets`, `pixelRatio`, `fontScale`, `breakpoint`, `isPortrait`, `isLandscape`, `themeName`, `statusBar`, `navigationBar`

### 4. Theme Control

```tsx
import { getThemeMode, setThemeMode } from '@theme';

// Get current mode
const mode = getThemeMode(); // 'light' | 'dark' | 'system'

// Change theme
setThemeMode('dark');    // Pin to dark
setThemeMode('light');   // Pin to light
setThemeMode('system');  // Follow OS
```

### 5. Using Theme in Components

```tsx
import { useUnistyles } from 'react-native-unistyles';

function MyComponent() {
  const { theme, rt } = useUnistyles();
  
  return (
    <View style={{ backgroundColor: theme.colors.background.primary }}>
      <Text style={{ color: theme.colors.text.primary }}>
        Current theme: {rt.themeName}
      </Text>
    </View>
  );
}
```

## Theme Tokens Reference

### Colors (Semantic)

Both light and dark themes have identical structure:

```typescript
colors: {
  background: { primary, secondary, tertiary },
  surface: { default, container, containerHigh, overlay },
  text: { primary, secondary, tertiary, disabled, placeholder, inverse, link },
  border: { default, subtle, strong, focus },
  outline: string,
  primary: string,
  onPrimary: string,
  secondary: string,
  onSecondary: string,
  status: {
    success, onSuccess, successContainer,
    error, onError, errorContainer,
    warning, onWarning, warningContainer,
    info, onInfo, infoContainer,
  },
  interactive: { hover, pressed, focused, disabled },
}
```

### Spacing

```typescript
spacing: { 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64 }
layout: { maxContentWidth: 800 }
```

### Typography

```typescript
typography: {
  fonts: { sans, serif, rounded, mono },
  fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20, '2xl': 24, '3xl': 30, '4xl': 36 },
  fontWeight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
  lineHeight: { tight: 1.2, normal: 1.5, relaxed: 1.75 },
  variants: {
    h1: { fontSize: 36, fontWeight: '700', lineHeight: 44 },
    h2: { fontSize: 30, fontWeight: '700', lineHeight: 38 },
    h3: { fontSize: 24, fontWeight: '600', lineHeight: 32 },
    body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
    caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
    button: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
  },
}
```

### Radii & Borders

```typescript
radii: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, '2xl': 24, full: 9999 }
borderWidth: { none: 0, thin: 1, medium: 2, thick: 4 }
```

### Shadows

```typescript
shadows: {
  none: { shadowColor: 'transparent', shadowOpacity: 0, shadowRadius: 0, elevation: 0 },
  sm: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  md: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 4 },
  lg: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 8 },
}
```

### Animation

```typescript
animation: {
  duration: { fast: 150, normal: 250, slow: 350 },
  easing: { standard: 'ease-in-out', decelerate: 'ease-out', accelerate: 'ease-in' },
}
```

## Migration from Legacy Theme

The legacy `src/theme/theme.ts` file is still present for backward compatibility. To migrate a component:

### Before (Legacy)
```tsx
import { Colors, Spacing } from '@theme';

const styles = StyleSheet.create({
  container: {
    padding: Spacing.three,
    backgroundColor: Colors.light.background,
  },
});
```

### After (Unistyles)
```tsx
import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.spacing[4],
    backgroundColor: theme.colors.background.primary,
  },
}));
```

## Next Steps

1. **Rebuild the app** (required for native modules):
   ```bash
   bun run prebuild
   bun run ios  # or: bun run android
   ```

2. **Test theme switching**:
   - Open the app and use the Theme Settings component on the home screen
   - Try Light, Dark, and System modes
   - Verify persistence by restarting the app

3. **Start migrating screens**:
   - Convert components one by one
   - Replace `import { StyleSheet }` with `import { StyleSheet } from 'react-native-unistyles'`
   - Update style definitions to use theme tokens
   - Remove hardcoded colors and spacing values

4. **Remove legacy theme** once all components are migrated:
   - Delete `src/theme/theme.ts`
   - Update `src/theme/index.ts` to remove legacy exports

## Testing Checklist

- [ ] App launches in correct theme (no flash)
- [ ] Theme persists across restarts
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] System mode follows OS appearance
- [ ] Theme switch is instant (no lag)
- [ ] Navigation headers follow theme
- [ ] Status bar follows theme
- [ ] Safe area insets work correctly
- [ ] Responsive breakpoints work on different screen sizes

## Troubleshooting

### Theme doesn't update on switch
- Ensure you're using `StyleSheet.create((theme) => {...})` function form, not static object
- Check that components using theme are re-rendering

### TypeScript errors with theme types
- Verify `@theme/unistyles` is imported at the top of `app/_layout.tsx`
- Check that theme module augmentation in `themes.ts` is being picked up by tsconfig

### White/black flash on launch
- Ensure `@theme/unistyles` is the FIRST import in `app/_layout.tsx`
- Verify MMKV is reading synchronously (no async/await)

### Styles not autocompleting
- Restart TypeScript server in your editor
- Check that `declare module 'react-native-unistyles'` exists in `themes.ts`

## Resources

- [Unistyles Documentation](https://unistyl.es/)
- [React Native Unistyles GitHub](https://github.com/jpudysz/react-native-unistyles)
- [MMKV Documentation](https://github.com/mrousavy/react-native-mmkv)
