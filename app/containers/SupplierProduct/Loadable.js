/**
 *
 * Asynchronously loads the component for SupplierProduct
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
