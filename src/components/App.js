import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import { booksReducer } from '../reducers/books';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(booksReducer);

const App = () => {
    return (
        <div>
        <Provider store={store}>
            <BookList />
        </Provider>
            <BookForm />
        </div>
    )
}

export default App;
