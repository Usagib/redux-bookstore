import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <tr key={this.props.book.id}>
                <td>{this.props.book.id}</td>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.category}</td>
            </tr>
        );
    }
}

export default Book;
