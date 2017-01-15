import state from './state';

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
    // Handle sensor's update input
    socket.on('update', (status) => {
      this.emit('update', status);
    });
    // Handle client's status request
    socket.on('request', (ack) => {
      ack(state.status);
    });
  }

}

export default new Socket;
