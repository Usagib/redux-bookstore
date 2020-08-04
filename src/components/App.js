import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => (
  <div className="main-container">
    <div className="panel">
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;
