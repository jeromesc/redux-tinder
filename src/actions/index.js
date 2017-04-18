// This is an action creator, it returns an action
export function selectBook(book) {
  // action has 2 values : payload & type
  return {
    type: 'BOOK_SELECTED',
    payload: book // not always
  };
} 