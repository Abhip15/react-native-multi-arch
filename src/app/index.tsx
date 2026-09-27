import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ThemeSettings } from '@/components/theme';
import { Env } from '@/config';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Welcome to GenericApp
        </ThemedText>

        <ThemedText type="subtitle" style={styles.subtitle}>
          Expo SDK 57 + React Native 0.86
        </ThemedText>

        <ThemedView style={styles.infoContainer}>
          <ThemedText type="default">
            <ThemedText type="smallBold">Environment: </ThemedText>
            {Env.appVariant}
          </ThemedText>

          <ThemedText type="default">
            <ThemedText type="smallBold">Version: </ThemedText>
            {Env.version}
          </ThemedText>

          <ThemedText type="default">
            <ThemedText type="smallBold">Debug Mode: </ThemedText>
            {Env.debugMode ? 'Enabled' : 'Disabled'}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.themeSection}>
          <ThemeSettings />
        </ThemedView>

        <ThemedText type="small" themeColor="textSecondary" style={styles.instructions}>
          Edit src/app/index.tsx to get started
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing[6],
    gap: theme.spacing[6],
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: -theme.spacing[4],
  },
  infoContainer: {
    gap: theme.spacing[3],
    padding: theme.spacing[5],
    borderRadius: theme.radii.lg,
    backgroundColor: theme.colors.surface.container,
    minWidth: 280,
  },
  themeSection: {
    width: '100%',
    maxWidth: 400,
    borderRadius: theme.radii.xl,
    backgroundColor: theme.colors.surface.default,
    ...theme.shadows.md,
  },
  instructions: {
    textAlign: 'center',
    marginTop: theme.spacing[2],
  },
}));
