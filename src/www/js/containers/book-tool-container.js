import Relay from 'react-relay';
import { BookTool } from '../components/book-tool';
//import InsertBookMutation from '../mutations/insert-book-mutation';

export const BookToolContainer = Relay.createContainer(BookTool, {

	fragments: {
		viewer: () => Relay.QL`
			fragment on Viewer {
				id
				books(first: 1000) {
					edges {
						node {
							id
							title
							category
							price
						}
					}
				}
			}
		`
	}

//		${InsertBookMutation.getFragment('viewer')}


});