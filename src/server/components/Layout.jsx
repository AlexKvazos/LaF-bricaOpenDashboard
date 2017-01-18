import React from 'react';

/**
 * Layout component
 *
 * @desc This is the only component that will render on the server. The client
 * will build the rest of the application inside this body container.
 */
class Layout extends React.Component {

  componentWillMount() {
    const { NODE_ENV } = process.env;

    this.version = global.version;
    this.name = global.name;
    this.prefix = NODE_ENV === 'production' ? '' : `http://${this.props.req.hostname}:8080`;
  }

  render() {
    return (
      <html>
        <head>
          <title>{ global.config.PAGE_TITLE }</title>
          <meta property='og:title' content='Is La Fábrica Open?' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://islafabricaopen.com' />
          <meta property='og:image' content='https://islafabricaopen.com/resources/img/cover-image.jpg' />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property='og:description' content='Check if La Fábrica is open, in real time!' />
          <meta name='description' content='Check if La Fábrica is open, in real time!' />
          <meta name='tags' content='la fabrica,cowork,open,spgg,san pedro,workspace,oficinas,monterrey,entrepreneur,startup' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          <link rel="shortcut icon" type="image/x-icon" href="/resources/img/favicon.ico"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" />
          {
            process.env.NODE_ENV === 'production'
              ? <link rel='stylesheet' href={ `${this.prefix}/dist/${this.name}-v${this.version}.css` } />
            : null
          }
        </head>
        <body>
          <div id='app' />
          <script type='text/javascript' src={ `${this.prefix}/dist/${this.name}-v${this.version}.js` } />
        </body>
      </html>
    );
  }
}

export default Layout;
