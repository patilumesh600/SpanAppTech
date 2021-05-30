/**
 *
 * Asynchronously loads the component for ViewDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
