import React, {Component} from 'react';
import { connect } from 'react-redux'; // import only one property

// This is not a component but a container,
// a special type of container that has direct access
// to the state from redux (react-redux library)
class BookList extends Component {

  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// use of the connect function to 
// return a container
// glue the state with the component...
export default connect(mapStateToProps)(BookList);