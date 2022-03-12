/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'netlify',
  server: './server.js',
  ignoredRouteFiles: ['.*'],
  assetsBuildDirectory: 'public/build/inspo',
  publicPath: '/build/inspo',
  // appDirectory: "app",
  // serverBuildPath: "netlify/functions/server/index.js",
  // devServerPort: 8002
}
