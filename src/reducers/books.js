const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

const initialState = {
  books: [
    {
      id: Math.round(Math.random() * 100),
      title: "Tom Swayer",
      category: "Kids",
    },
    {
      id: Math.round(Math.random() * 100),
      title: "The Crow",
      category: "Horror",
    },
    {
      id: Math.round(Math.random() * 100),
      title: "Tiger Tiger",
      category: "Sci-Fi",
    },
  ]
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return true // state.slice(0, action.id).concat(state.slice(action.id + 1));
    default:
      return state;
  }
};

export default booksReducer;
