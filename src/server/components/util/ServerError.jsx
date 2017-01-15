import React from 'react';

class ServerError extends React.Component {

  render() {
    return (
      <html>
        <head>
          <title>{global.config.PAGE_TITLE} - 500 Internal Server Error</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
        </head>
        <body style={{ backgroundColor: '#c33535', fontFamily: 'monospace', color: '#ffffff' }}>

          <h1>500 Internal Server Error</h1>
          { process.env.NODE_ENV ? (
            <div>
              <h2>{ this.props.error.code }</h2>
              <pre>{ this.props.error.stack }</pre>
            </div>
          ) : (
            <p>Our engineers have been alerted and are already working on a solution.</p>
          ) }
        </body>
      </html>

    );
  }

}

export default ServerError;
