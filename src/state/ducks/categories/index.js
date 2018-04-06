import {
  getCategories,
} from './actions';
import * as categoriesSelectors from './selectors';
import categoriesReducers from './reducers';

export {
  // actions
  getCategories,
  // selectors
  categoriesSelectors,
};

export default categoriesReducers;