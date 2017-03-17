/**
 * Default Configuration
 *
 * Duplicate this configuration file and rename it according to the environment
 * you are running the application in. The configs won't be versioned.
 *
 * Example:
 * 'env.development.js' will be used when NODE_ENV == 'development'.
 * 'env.production.js' will be used when NODE_ENV == 'production'.
 *
 *
 * The config can be accessed from any server-side code using 'global.config'
 *
 * Example:
 * app.listen(global.config.PORT);
 *
 */

const config = {

  // General
  PAGE_TITLE: 'Is La Fábrica Open?',
  PORT: 3000,

  SLACK: {
    WEBHOOK: ''
  }

  // Database (Uncomment to enable database initialization)
  // MYSQL: {
  //   HOST: '127.0.0.1',
  //   PORT: 3307,
  //   USER: 'root',
  //   PASSWORD: '',
  //   DATABASE: 'database'
  // }

};

export default config;
