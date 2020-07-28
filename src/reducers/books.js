const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

const initialState = [
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
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
