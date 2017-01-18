import React from 'react';

export class BookForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            category: '',
            price: 0,
            authorId: 0
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClick = () => {
        console.log(this.state);
    };

    render() {
        return <div>
            <h2>Create a Book</h2>
            <form>
                <div>
                    <label htmlFor="book-title">Title</label>
                    <input type="text" id="book-title" name="title"
                        value={this.state.title} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="book-category">Category</label>
                    <input type="text" id="book-category" name="category"
                        value={this.state.category} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="book-price">Price</label>
                    <input type="text" id="book-price" name="price"
                        value={this.state.price} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="book-author-id">Author ID</label>
                    <input type="text" id="book-author-id" name="authorId"
                        value={this.state.authorId} onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.onClick}>Add Book</button>
            </form>
        </div>;
    }

}