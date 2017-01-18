import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from './components/app-container';

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
