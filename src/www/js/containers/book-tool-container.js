import Relay from 'react-relay';

import { BookTool } from '../components/book-tool';
import { InsertBookMutation } from '../mutations/insert-book-mutation';
import { UpdateBookMutation } from '../mutations/update-book-mutation';
import { DeleteBookMutation } from '../mutations/delete-book-mutation';

export default Relay.createContainer(BookTool, {

    fragments: {

        viewer: () => Relay.QL `
			fragment on Viewer {
				id
				books(first: 2) {
					edges {
						node {
							id
							title
							category
                            price
                            authorId
						}
					}
				}
				${InsertBookMutation.getFragment('viewer')}
				${UpdateBookMutation.getFragment('viewer')}
				${DeleteBookMutation.getFragment('viewer')}
			}
		
		`
    }
});