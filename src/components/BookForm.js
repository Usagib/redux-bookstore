import React from "react";

const cat = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

const BookForm = () => {
  return (
    <form>
      <h3>Add a book</h3>
      <br />
      <input type="text" id="Title" placeholder="title" />
      <br />
      <select id="Category">
        <option value="">Category</option>
        {cat.map((cat) => {
          return <option value={cat}>{cat}</option>;
        })}
      </select>
      <br />
      <br />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default BookForm;