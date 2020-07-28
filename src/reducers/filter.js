const CHANGE_FILTER = "CHANGE_FILTER";

const initialState = {
  filter: 'All'
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
