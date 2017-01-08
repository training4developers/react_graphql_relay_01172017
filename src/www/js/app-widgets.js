import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const widgets = [
	{ name: 'Widget 1'},
	{ name: 'Widget 2'},
	{ name: 'Widget 3'},
	{ name: 'Widget 4'}
];

class WidgetList extends React.Component {

	render() {
		return <ul> 
			{this.props.widgets.map(widget => <li>{widget.name}</li>)}
		</ul>;
	}

}

class WidgetForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			widgetName: '',
			widgetColor: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return <form>
			<label htmlFor="widget-name">Name:</label>
			<input type="text" id="widget-name" name="widgetName"
				value={this.state.widgetName} onChange={this.onChange} />
			<label htmlFor="widget-color">Color:</label>
			<input type="text" id="widget-color" name="widgetColor"
				value={this.state.widgetColor} onChange={this.onChange} />
		</form>;
	}

}

class WidgetTool extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <div>
			<WidgetList widgets={this.props.widgets} />
			<WidgetForm />
		</div>;
	}

}

const req = {
	query: 'query { widgets { name }}',
	variables: null
};

fetch('/graphql', {
	method: 'POST',
	body: JSON.stringify(req),
	headers: new Headers({ 'content-type': 'application/json' })
})
	.then(res => res.json())
	.then(({ data }) =>
		ReactDOM.render(<WidgetTool widgets={data.widgets} />, document.querySelector('main')));



