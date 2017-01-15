import state from './state';
import { logger } from './util';

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
      console.log('Status changed to ', status);
      state.open = status;
      this.emit('update', status);
    });
    // Handle client's status request
    socket.on('request', (ack) => {
      ack(state.open);
    });
  }

}

export default new Socket;
