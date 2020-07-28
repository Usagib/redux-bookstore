const CHANGE_FILTER = "CHANGE_FILTER";

const filter = (state = 'All', action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default filter;
