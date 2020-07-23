const REMOVE_BOOK = "REMOVE_BOOK";
const CREATE_BOOK = "CREATE_BOOK";

const createBook = (book) => ({ type: CREATE_BOOK, book: book })

const removeBook = (book) => ({ type: REMOVE_BOOK, book: book })

export {
  createBook,
  removeBook,
};
