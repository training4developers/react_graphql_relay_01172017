import React from 'react';

export class BookTool extends React.Component {

	render() {

		return <ul>
			{this.props.viewer.books.edges.map(edge => <li>{edge.node.title}</li>)}
		</ul>;

	}

}