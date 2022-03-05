module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    TEST_URL: "http://localhost:3000",
    webpack: (config) => {
      config.module.rules.push({
        test: /\.json$/,
        loader: "json-loader",
      });
      return config;
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: [{ loader: "html-loader" }],
    });
    return config;
  },
};
