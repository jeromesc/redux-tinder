import React, {Component} from 'react';

import { connect } from 'react-redux'; // import only one property
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // flow through all components

// This is not a component but a container,
// a special type of container that has direct access
// to the state from redux (react-redux library)
class BookList extends Component {

  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li onClick={ () => this.props.selectBook(book) } 
            key={book.title} 
            className="list-group-item">
            {book.title}
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}

// Take our App state as an argument
// the link beteen React and Redux is here...
function mapStateToProps(state) {
  // the return will be mapped to props inside
  // BookList
  return {
    books: state.books
  };
}

// anything returned will end as props in the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to
  // all reducers
  // dispatch is a function to dispatch the actions to all other
  // reducers
  // this.props.selectBook
  return bindActionCreators( {selectBook: selectBook}, dispatch );
}

// use of the connect function to 
// return a container
// glue the state with the component...
// and make selectBook available in this.props.selectBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);