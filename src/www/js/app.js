import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <h1>Welcome to React/GraphQL/Relay!</h1>;
    }

}

ReactDOM.render(<App />, document.querySelector('main'));