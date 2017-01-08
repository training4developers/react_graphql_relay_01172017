import Relay from 'react-relay';
import { WidgetTool } from '../components/widget-tool';
import InsertWidgetMutation from '../mutations/insert-widget-mutation';

export const WidgetToolContainer = Relay.createContainer(WidgetTool, {

	fragments: {
		viewer: () => Relay.QL`
			fragment on Viewer {
				id
				widgets(first: 1000) {
					edges {
						node {
							id
							name
							description
							color
							size
							quantity
						}
					}
				}
				${InsertWidgetMutation.getFragment('viewer')}
			}
		`
	}

});