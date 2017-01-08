export default class {
	constructor(widget) {

		if (!widget) return;

		Object.assign(this, {
			id: widget.id,
			name: widget.name,
			description: widget.description,
			color: widget.color,
			size: widget.size,
			quantity: widget.quantity
		});

	}
}
