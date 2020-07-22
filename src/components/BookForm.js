import React from 'react';
const cat = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

export default class BookForm extends React.Component {

    render() {
        return (
            <form>
                <h3>Add a book</h3>
                <label for="Title">Book Title</label><br />
                <input type="text" id="Title" placeholder="title" /><br />
                <label for="Category">Book Category</label><br />
                <select id="Category">
                    <option value="">Category</option>
                    {
                        cat.map((cat) => {
                            return (
                                <option value={cat}>{cat}</option>
                            );
                        })
                    }
                </select><br />
                <br />
                <button type="submit">Confirm</button>
            </form>
        );
    }
};
