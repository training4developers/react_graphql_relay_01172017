export default class {
	constructor(book) {

		if (!book) return;

		Object.assign(this, {
			id: book.id,
			title: book.title,
			price: book.price,
			category: book.category
		});

	}
}
