module.exports = (env) => {
  const suffix = "WEBPACK_SERVE" in env ? "dev" : "prod";
  const cfg = require(`./webpackConf.${suffix}.js`);
  return cfg;
};
