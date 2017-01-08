import '../css/styles.scss';

import React from 'react';
import Relay from 'react-relay';	
import ReactDOM from 'react-dom';

import { WidgetToolContainer } from './containers/widget-tool-container';
//import { BookToolContainer } from './containers/book-tool-container';
import { ViewerRoute } from './routes/viewer-route';

ReactDOM.render(<Relay.RootContainer Component={WidgetToolContainer} route={new ViewerRoute()} />,
	document.querySelector('main'));

// ReactDOM.render(<Relay.Renderer
// 	Container={BookToolContainer}
// 	queryConfig={new ViewerRoute()}
// 	environment={Relay.Store}
//  />, document.querySelector('main'));