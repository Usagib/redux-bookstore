const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.slice(0, action.id).concat(state.slice(action.id + 1));
    default:
      return state;
  }
};

export default booksReducer;
