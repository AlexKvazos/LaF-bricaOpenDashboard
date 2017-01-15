import { util } from '../modules';

/**
 * Database Bootstrap
 * @param  {Function} done Executed when task is done
 */
export default function bootstrapDatabase(done) {
  util.mysql.init(done);
}
