
/**
 * Config Bootstrap
 * @param {Function} done Executed when task is done
 */
export default function configBootstrap(done) {
  require('../../../config');
  done();
}
