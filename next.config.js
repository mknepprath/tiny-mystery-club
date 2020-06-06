const { join } = require("path");

module.exports = {
  webpack(config, options) {
    const paths = ["components"];
    paths.forEach(
      (path) => (config.resolve.alias[path] = join(__dirname, path))
    );

    return config;
  },
};
