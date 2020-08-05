import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import '../index.css';

const App = () => (
  <div className="panel">
    <BookList />
    <BookForm />
  </div>
);

export default App;
