import './segmentio';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import router from './router';
import state from './state';

/**
 * Client entry poiint.
 */

const socket = io();

socket.on('connect', () => {
  socket.emit('request', (data) => {
    state.select(['loaded']).set(true);
    state.select(['open']).set(data);
  });
});

socket.on('update', (data) => {
  state.select(['loaded']).set(true);
  state.select(['open']).set(data);
});

// Render the react-router result to the target node
const node = document.getElementById('app');
ReactDOM.render(router, node);
