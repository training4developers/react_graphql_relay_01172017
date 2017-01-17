import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json'}),
            body: '{"query":"query { message }","variables":null}'
        })
        .then(res => res.json())
        .then(results => {
            this.setState({
                message: results.data.message
            });
        });
    }

    render() {
        return <h1>{this.state.message}</h1>;
    }
}

ReactDOM.render(<App />, document.querySelector('main'));

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
