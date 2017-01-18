import React from 'react';

import { BookForm } from './book-form';

export class App extends React.Component {

    static propTypes = {
        message: React.PropTypes.string,
        books: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: null, title: null, category: null, price: null 
            })
        )
    };

    render() {
        return <div>
            <h1>{this.props.message}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.books.map(book => <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.category}</td>
                        <td>{book.price}</td>
                    </tr>)}
                </tbody>
            </table>
            <BookForm />
        </div>;
    }
}