const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // Add custom minifier settings
  config.transformer.minifierConfig = {
    keep_classnames: true,
    keep_fnames: true,
  };

  // Ensure the resolver includes PNG files
  config.resolver.assetExts.push('png');

  return config;
})();
