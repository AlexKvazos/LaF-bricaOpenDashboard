import Slack from './slack';

class Fabrica {

  static event(status) {
    console.log(status);
    if (status) {
      return Fabrica.open();
    }
    Fabrica.close();
  }

  static open() {
    Slack.send({
      title: 'La Fábrica is now open!',
      color: '#7ed510'
    });
  }

  static close() {
    Slack.send({
      title: 'La Fábrica is now closed!',
      color: '#e9430e'
    });
  }

}

export default Fabrica;
