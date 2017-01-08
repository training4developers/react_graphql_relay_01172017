import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const booksPropType = React.PropTypes.arrayOf(React.PropTypes.shape({
	id: React.PropTypes.number,
	title: React.PropTypes.string,
	category: React.PropTypes.string,
	price: React.PropTypes.number,
	author: React.PropTypes.shape({
		id: React.PropTypes.number,
		firstName: React.PropTypes.string,
		lastName: React.PropTypes.string
	})
}));

class BookTable extends React.Component {

	static propTypes = {
		books: booksPropType
	}

	render() {
		return <table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th>Author</th>
				</tr>
			</thead>
			<tbody>
				{this.props.books.map(book => <tr key={book.id}>
					<td>{book.title}</td>
					<td>{book.category}</td>
					<td>{book.price}</td>
					<td>{book.author.firstName} {book.author.lastName}</td>
				</tr>)}
			</tbody>
		</table>;
	}

}

class BookForm extends React.Component {

	static propTypes = {
		addBook: React.PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {
			bookTitle: '',
			bookCategory: '',
			bookPrice: 0,
			bookAuthorId: 1
		};

		this.onChange = this.onChange.bind(this);
		this.addBook = this.addBook.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addBook() {

		// add code to post the author

		this.props.addBook({
			title: this.state.bookTitle,
			category: this.state.bookCategory,
			price: this.state.bookPrice,
			authorId: this.state.bookAuthorId,
		});

		this.setState({
			bookTitle: '',
			bookCategory: '',
			bookPrice: 0,
			bookAuthorId: 1
		});
	}

	render() {
		return <form>
			<div>
				<label htmlFor="book-title">Title:</label>
				<input type="text" id="book-title" name="bookTitle"
					value={this.state.bookTitle} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="book-category">Category:</label>
				<input type="text" id="book-category" name="bookCategory"
					value={this.state.bookCategory} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="book-price">Price:</label>
				<input type="text" id="book-price" name="bookPrice"
					value={this.state.bookPrice} onChange={this.onChange} />
			</div>
			<div>
				<label htmlFor="book-author-id">Author Id:</label>
				<input type="text" id="book-author-id" name="bookAuthorId"
					value={this.state.bookAuthorId} onChange={this.onChange} />
			</div>
			<button type="button" onClick={this.addBook}>Add Book</button>
		</form>;
	}

}

const fetchGraphQL = req =>
	fetch('/graphql', {
		method: 'POST',
		body: JSON.stringify(req),
		headers: new Headers({ 'content-type': 'application/json' })
	}).then(res => res.json());

const getAllBooks = () =>
	fetchGraphQL({
		query: 'query { books { id, title, category, price, author { id, firstName, lastName } }}',
		variables: null
	});

const insertOneBook = book => fetchGraphQL({
	operationName: 'InsertBook',
	query: `mutation InsertBook($book: InsertBook) {
  
  insertBook(book: $book) {
    id
    title
    category
    price
  }
  
}`,
	variables: { book }
});

class BookToolContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			books: []
		};

		this.addBook = this.addBook.bind(this);
	}

	componentDidMount() {

		getAllBooks().then(({ data }) => {
			this.setState({
				books: data.books
			});
		});

	}

	addBook(book) {

		insertOneBook(book)
			.then(() => getAllBooks())
			.then(({ data }) => {
				this.setState({
					books: data.books
				});
			});	

	}

	render() {
		return <div>
			<BookTable books={this.state.books} />
			<BookForm addBook={this.addBook} />
		</div>;
	}

}

ReactDOM.render(<BookToolContainer />, document.querySelector('main'));






