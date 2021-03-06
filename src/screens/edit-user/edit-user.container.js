import { connect } from 'react-redux';
import editUserComponent from './edit-user.component.js';
import { asyncEditUser } from '../../actions/user-actions';

const mapStateToProps = (state) => {

  return {
    id: state.user.id,
    name: state.user.name,
    email: state.user.email,
    sendingData: state.user.sendingData,
    errors: state.user.errors,
    isRegistered: state.user.isRegistered
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser(userData) {
      dispatch(asyncEditUser(userData));
    }
  }
}
const editUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(editUserComponent)

export default editUserContainer;
