import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} 
                onClick={() => this.props.selectBook(book)} 
                className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        );
    }
} 

function mapStateToProps(state) {
    // Whatever is returned from here will showup as props inside of Book List
    return {
        books: state.books
    };
}


//Anything returned from the function will end up in props 
// on the BookList Container 
function mapDispatchToProps(dispatch) {

    //Whenever selectBook is called the result should be passed 
    //to all of our Reducers 
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// To Promote BookList from Component to Container - it needs to know
// about this dispatch method, selectBook. Make it available 
// as a prop  
export default connect(mapStateToProps, mapDispatchToProps)(BookList);