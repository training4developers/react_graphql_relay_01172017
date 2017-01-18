import React from 'react';

import { App } from './app';

export class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            books: []
        };
    }    

    componentDidMount() {

        const query = `
            query {
                message
                books {
                    id 
                    title 
                    category 
                    price
                }
            }
        `;

        const variables = null;

        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json'}),
            body: JSON.stringify({ query, variables })
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