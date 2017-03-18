import moment from 'moment';
import Slack from './slack';
import phrases from './phrases';

class Fabrica {

  static event(status) {
    console.log(status);
    if (status) {
      return Fabrica.open();
    }
    Fabrica.close();
  }

  static open() {
    let day = moment().day();

    let list = phrases[day]['open'];
    let phrase = list[Math.floor(Math.random()*list.length)];

    Slack.send({
      title: 'La Fábrica is now open!',
      text: phrase,
      color: '#7ed510'
    });
  }

  static close() {
    let day = moment().day();

    let list = phrases[day]['close'];
    let phrase = list[Math.floor(Math.random()*list.length)];

    Slack.send({
      title: 'La Fábrica is now closed!',
      text: phrase,
      color: '#e9430e'
    });
  }

}

export default Fabrica;
