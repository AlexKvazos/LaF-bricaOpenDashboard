import React from 'react';
import NotFound from '../components/util/NotFound';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * 404 Handler
 * @desc Sends a proper 404 page
 */
export default function notFound(req, res) {
  if (req.xhr) {
    return res.status(404).json({ error: 'Invalid Endpoint', status: 404 });
  }

  res.status(404).send(renderToStaticMarkup(<NotFound />));

}
