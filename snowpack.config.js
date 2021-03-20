/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    namedExports: ['@inlet/react-pixi'],
    polyfillNode: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
