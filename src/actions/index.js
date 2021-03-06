const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => (
  { type: CREATE_BOOK, book }
);

const removeBook = book => (
  { type: REMOVE_BOOK, book }
);

const changeFilter = filter => (
  { type: CHANGE_FILTER, filter }
);

export {
  createBook,
  removeBook,
  changeFilter,
};
