import agent from 'superagent';
import { logger } from './util';

/**
 * Slack integration module
 * @type {Object}
 */
class Slack {

  /**
   * Send a message to the slack organization
   * @param {String} channel The channel name (i.e. '#general')
   * @param {Object} data Slack payload data
   * @see https://slack.com
   */
  static send(data) {
    agent.post(global.config.SLACK.WEBHOOK)
      .send({
        text: data.text,
        attachments: [
          {
            color: data.color,
            title: data.title,
            title_link: data.titleLink,
            fallback: data.title,
            fields: data.fields,
            image_url: data.image_url,
            thumb_url: data.image_url,
            ts: Date.now()/1000
          }
        ]
      })
      .end((err, res) => {
        if (err) return logger.error(err);
      });
  }

}

export default Slack;
