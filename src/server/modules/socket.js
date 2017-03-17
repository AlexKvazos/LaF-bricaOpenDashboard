import state from './state';
import { logger } from './util';
import Fabrica from './fabrica';

class Socket {

  /**
   * Initialize Socket Module
   */
  init(io) {
    this.io = io;
    io.on('connect', ::this.onClientConnect);
  }

  /**
   * Emit to all connected sockets
   */
  emit(...args) {
    this.io.emit(...args);
  }

  /**
   * Handle client connections
   */
  onClientConnect(socket) {
    logger.info('Socket client connected - ' + socket.id);

    // Handle sensor's update input
    socket.on('update', (status) => {
      state.open = status;
      Fabrica.event(status);
      console.log('Here');
      this.emit('update', status);
    });
    // Handle client's status request
    socket.on('request', (ack) => {
      ack(state.open);
    });
  }

}

export default new Socket;
