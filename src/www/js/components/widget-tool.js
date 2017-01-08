import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import InsertWidgetMutation from '../mutations/insert-widget-mutation';

export class WidgetTool extends Component {

	static propTypes = {
		viewer: PropTypes.shape({
			widgets: PropTypes.shape({
				edges: PropTypes.array
			})
		})
	}

	constructor(props) {
		super(props);
		this.state = {
			widgetName: '',
			widgetDescription: '',
			widgetColor: '',
			widgetSize: '',
			widgetQuantity: 0
		};

		this.onChange = this.onChange.bind(this);
		this.addWidget = this.addWidget.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addWidget() {

		const widget = {
			name: this.state.widgetName,
			description: this.state.widgetDescription,
			color: this.state.widgetColor,
			size: this.state.widgetSize,
			quantity: this.state.widgetQuantity
		};

		Relay.Store.commitUpdate(new InsertWidgetMutation(
			Object.assign({	viewer: this.props.viewer, widget: null }, widget)
		));

		this.setState({
			widgetName: '',
			widgetDescription: '',
			widgetColor: '',
			widgetSize: '',
			widgetQuantity: 0
		});
	}

	render() {

		const edges = this.props.viewer.widgets.edges;

		return <div>
			<h1>Widget Tool</h1>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Color</th>
						<th>Size</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{edges.map(edge => <tr key={edge.node.id}>
						<td>{edge.node.name}</td>
						<td>{edge.node.description}</td>
						<td>{edge.node.color}</td>
						<td>{edge.node.size}</td>
						<td>{edge.node.quantity}</td>
					</tr>)}
				</tbody>
			</table>

			<form>
				<div>
					<label>Widget Name:</label>
					<input type="text" name="widgetName" id="widget-name" value={this.state.widgetName} onChange={this.onChange} />
				</div>
				<div>
					<label>Widget Description:</label>
					<input type="text" name="widgetDescription" id="widget-description" value={this.state.widgetDescription} onChange={this.onChange} />
				</div>
				<div>
					<label>Widget Color:</label>
					<input type="text" name="widgetColor" id="widget-color" value={this.state.widgetColor} onChange={this.onChange} />
				</div>
				<div>
					<label>Widget Size:</label>
					<input type="text" name="widgetSize" id="widget-size" value={this.state.widgetSize} onChange={this.onChange} />
				</div>
				<div>
					<label>Widget Quantity:</label>
					<input type="number" name="widgetQuantity" id="widget-quantity" value={this.state.widgetQuantity} onChange={this.onChange} />
				</div>
				<button type="button" onClick={this.addWidget}>Add Widget</button>
			</form>

		</div>;
	}
}