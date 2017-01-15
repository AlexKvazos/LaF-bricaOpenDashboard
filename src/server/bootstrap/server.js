import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import express from 'express';
import { util, socket } from '../modules';
import middleware from '../middleware';
import controllers from '../controllers';

/**
 * Server bootstrap
 * @param  {Function} done Executed when task is completed
 */
export default function bootstrapServer(done) {

  // Create express application
  const app = express();

  // Public directories
  app.use('/resources', express.static(path.join(__dirname, '../../../resources')));
  app.use('/dist', express.static(path.join(__dirname, '../../../dist')));

  // Bind middleware
  app.use(middleware.httpLogger);
  app.use(middleware.body);

  // Bind all controllers to the express application
  for (let c in controllers) {
    app.use(controllers[c]);
  }

  app.get('*', middleware.notFound);
  app.use(middleware.errors);

  // Create http server and bind express application to it
  const server = http.createServer(app);
  const port = global.config.PORT || 3000;
  socket.init(socketio(server));

  server.listen(port, () => {
    util.logger.info(`▸ HTTP server running on http://0.0.0.0:${port}`);
    done();
  });

  /**
   * Gracefully shutdown server
   */

  process.on('SIGTERM', () => {
    process.stdout.write('\n');
    util.logger.info('Initializing graceful shutdown');
    server.close(() => {
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    process.stdout.write('\n');
    util.logger.info('Initializing graceful shutdown');
    server.close(() => {
      process.exit(0);
    });
  });
}
