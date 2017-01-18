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

        //this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // onChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });        
    // }

    render() {
        return <form>
            <div>
                <label htmlFor="book-title">Title</label>
                <input type="text" id="book-title" name="title"
                    value={this.state.title} onChange={this.onChange} />
            </div>
        </form>;
    }

}