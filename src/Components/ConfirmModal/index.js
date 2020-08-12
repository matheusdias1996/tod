import { connect } from 'react-redux'

import { closeModal } from '../../actions'
import ConfirmModal from './view'

const mapStateToProps = (state, ownProps) => ({
  modalOpen: state.modals[ownProps.modalId],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeModal: () =>  {
    dispatch(closeModal(ownProps.modalId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal)
