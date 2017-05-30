import { connect } from 'react-redux';
import ViewBookComponent from './view-book.component';

import { bookSet, asyncBookDelete } from '../../actions/book-actions';
import { asyncBookListSet } from '../../actions/book-list-actions'
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    book: state.book,
    user: state.user,
    isVisitor: state.user.isVisitor

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBook(book) {
      dispatch(bookSet(book));
    },
    deleteBook(bookId) {

        dispatch(asyncBookDelete(bookId));

        Actions.pop();
      }
    }
  }

  const ViewBookContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewBookComponent);

  export default ViewBookContainer;
