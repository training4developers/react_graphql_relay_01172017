import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {

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
                    {this.props.books.map(book => <tr>
                        <td>{book.title}</td>
                        <td>{book.category}</td>
                        <td>{book.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>;
    }
}

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            books: []
        };
    }    

    componentDidMount() {
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json'}),
            body: '{"query":"query { message, books { title, category, price } } ","variables":null}'
        })
        .then(res => res.json())
        .then(results => {
            this.setState({
                message: results.data.message,
                books: results.data.books
            });
        });
    }    

    render() {
        return <App message={this.state.message} books={this.state.books} />;
    }

}

ReactDOM.render(<AppContainer />, document.querySelector('main'));

// fetch('http://localhost:3000/graphql', {
//     method: 'POST',
//     headers: new Headers({ 'content-type': 'application/json'}),
//     body: '{"query":"query { message }","variables":null}'
// })
// .then(res => res.json())
// .then(results => {

//     ReactDOM.render(
//         <App message={results.data.message} />,
//         document.querySelector('main'));

// });
