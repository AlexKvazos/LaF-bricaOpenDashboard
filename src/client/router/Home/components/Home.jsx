import React from 'react';

class Main extends React.Component {

  render() {
    return (
      <div>

        <img src='/resources/img/logo.png' className='logo' />

        <h1>Is La Fábrica Open Right Now?</h1>

        <span className='status open'>
          Yes we are!
        </span>

        <div className='footnote'>
          <h2>This website updates in real time.</h2>
          <h3>Crafted by <a href='https://github.com/AlexKvazos' target='_blank'>Alejandro Cavazos</a> · Not affiliated with La Fábrica</h3>
        </div>

      </div>
    );
  }
}

export default Main;
