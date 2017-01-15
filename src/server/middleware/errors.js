import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ServerError from '../components/util/ServerError';
import util from '../modules/util';


/**
 * HTTP Error Handler
 * @desc Logs http errors to the logging service and responds
 * to the client with the proper error format
 */
export default function errorHandler(err, req, res, next) {
  res.status(500);
  util.logger.error(err);

  if (req.xhr) {
    return res.json({ error: 'Internal Server Error' });
  }

  res.send(renderToStaticMarkup(<ServerError error={ err } />));

}
