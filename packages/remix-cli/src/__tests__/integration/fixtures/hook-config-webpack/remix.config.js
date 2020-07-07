const appConfig = require('./src/app.config');
const dynamicPages = [...appConfig.pages];

if (Array.isArray(appConfig.subPackages)) {
  appConfig.subPackages.forEach(it => {
    dynamicPages.push(`${it.root}/**`);
  });
}

const less = () => ({
  configWebpack({ config, addCSSRule }) {
    addCSSRule({
      name: 'less',
      test: /\.less(\?.*)?$/,
      loader: require.resolve('less-loader'),
    });
  },
});

module.exports = {
  dynamicPages,
  plugins: [less()],
};