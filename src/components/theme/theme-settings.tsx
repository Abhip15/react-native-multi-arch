import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useState } from 'react';
import { getThemeMode, setThemeMode, type ThemeMode } from '@theme';

const OPTIONS: { mode: ThemeMode; label: string }[] = [
  { mode: 'light', label: 'Light' },
  { mode: 'dark', label: 'Dark' },
  { mode: 'system', label: 'System' },
];

export function ThemeSettings() {
  const [current, setCurrent] = useState<ThemeMode>(getThemeMode());

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    setCurrent(mode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theme Settings</Text>
      {OPTIONS.map(({ mode, label }) => (
        <Pressable
          key={mode}
          onPress={() => handleThemeChange(mode)}
          style={[styles.option, current === mode && styles.selected]}
        >
          <Text style={styles.label}>{label}</Text>
          {current === mode && <Text style={styles.checkmark}>✓</Text>}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: { padding: theme.spacing[4], gap: theme.spacing[3] },
  title: {
    ...theme.typography.variants.h3,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[2],
  },
  option: {
    padding: theme.spacing[4],
    borderRadius: theme.radii.lg,
    borderWidth: 2,
    borderColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.container,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.interactive.focused,
  },
  label: { ...theme.typography.variants.body, color: theme.colors.text.primary },
  checkmark: {
    ...theme.typography.variants.body,
    color: theme.colors.primary,
    fontWeight: '700',
  },
}));
