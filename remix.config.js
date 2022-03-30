/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'netlify',
  server: './server.js',
  ignoredRouteFiles: ['.*'],
  assetsBuildDirectory: 'public/inspo/build',
  publicPath: '/inspo/build/',
  // appDirectory: "app",
  // serverBuildPath: "netlify/functions/server/index.js",
  // devServerPort: 8002
}
