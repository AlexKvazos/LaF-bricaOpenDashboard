import React from 'react';
import { branch } from 'baobab-react/higher-order';

@branch({
  open: ['open'],
  loaded: ['loaded']
})

class Main extends React.Component {

  render() {
    let { open, loaded } = this.props;

    return (
      <div>
        <img src='/resources/img/logo.png' className='logo' />
        <h1>Is La Fábrica Open Right Now?</h1>

        { loaded ? (
          open ? (
            <span className='status open'>
              We Are Open!
            </span>
          ) : (
            <span className='status closed'>
              We Are Closed!
            </span>
          )
        ) : null }

        <div className='footnote'>
          <h2>This website updates in real time.</h2>
          <h3>Crafted by <a href='https://github.com/AlexKvazos' target='_blank'>Alejandro Cavazos</a> · Not affiliated with La Fábrica</h3>
        </div>
      </div>
    );
  }
}

export default Main;
