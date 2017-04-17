import { combineReducers } from 'redux';
import BooksReduder from './reducer_books';

const rootReducer = combineReducers({
  // mapping of state is here
  books: BooksReduder
});

export default rootReducer;