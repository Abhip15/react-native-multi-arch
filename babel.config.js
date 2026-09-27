module.exports = function (api) {
  api.cache(true);
  return {
    // babel-preset-expo already handles: export-namespace-from, the
    // react-native-worklets/reanimated plugin (auto when installed), and the
    // React Compiler (via experiments.reactCompiler in app.config.ts).
    // Path aliases come from tsconfig `paths` (@expo/metro-config), so no
    // babel-plugin-module-resolver is needed.
    presets: ['babel-preset-expo'],
    plugins: [
      // Unistyles must be added explicitly; the preset does not include it.
      ['react-native-unistyles/plugin', { root: 'src' }],
    ],
  };
};
