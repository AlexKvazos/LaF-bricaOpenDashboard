import mysql from 'mysql';
import logger from './logger';

class Mysql {
  constructor() {
    this.connection = null;
  }

  /**
   * Initiallizes the database connection
   */
  init(done) {
    if (!global.config.MYSQL) {
      logger.warn('Missing MySQL Configuration. Skipping database initialization...');
      return done();
    }

    // create database connection
    this.connection = mysql.createConnection({
      host:        global.config.MYSQL.HOST,
      port:        global.config.MYSQL.PORT,
      user:        global.config.MYSQL.USER,
      password:    global.config.MYSQL.PASSWORD,
      database:    global.config.MYSQL.DATABASE,
      timezone:    'utc',
      charset:     'utf8mb4'
    });

    this.connection.connect(this.connectionHandler.bind(this, done));
  }

  /**
   * Handle a database connection attempt
   * @param  {Object} err Possible error object
   */
  connectionHandler(done, err) {
    if (err) {
      if (err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT') {
        logger.error('▸ MySQL connection failed!', err.code);
        return setTimeout(::this.init, 5000);
      }

      console.error(err);
    }

    logger.info('▸ Successfully connected to MySQL server.');
    this.connection.on('error', ::this.errorHandler);
    done();
  }

  /**
   * Handle MySQL errors that are not caused by queries
   * @param  {Object} err Error object
   */
  errorHandler(err) {
    switch (err.code) {
      case 'PROTOCOL_CONNECTION_LOST':
        setTimeout(::this.init, 5000);
        break;
    }
  }

  /**
   * Execute a query onto the connection
   */
  query(...params) {
    this.connection.query(...params);
  }
}

export default new Mysql;
