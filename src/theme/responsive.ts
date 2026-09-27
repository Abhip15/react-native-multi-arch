import type { UnistylesRuntime } from 'react-native-unistyles';

const clampPercent = (p: number) => (Number.isFinite(p) ? Math.min(Math.max(p, 0), 100) : 0);

/** Percentage of screen width → px. Use inside StyleSheet.create((t, rt) => …). */
export const wp = (percent: number, rt: typeof UnistylesRuntime) =>
  (clampPercent(percent) / 100) * rt.screen.width;

/** Percentage of screen height → px. */
export const hp = (percent: number, rt: typeof UnistylesRuntime) =>
  (clampPercent(percent) / 100) * rt.screen.height;
