import React from 'react';

class NotFound extends React.Component {

  render() {
    return (
      <html>
        <head>
          <title>{global.config.PAGE_TITLE} - 404 Not Found</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
        </head>
        <body>
          <h1>404 Not Found</h1>
        </body>
      </html>
    );
  }

}

export default NotFound;
