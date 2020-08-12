import { connect } from 'react-redux'

import { closeList, closeModal, resetForm, unsetClassDate, updateFormField } from '../../../../actions'
import ClassModal from './view'

const mapStateToProps = (state, ownProps) => ({
  form: state.forms.class,
  open: state.modals[ownProps.modalId],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeModal(ownProps.modalId))
    dispatch(closeList({ groupId: 'classModal', name: 'students' }))
    dispatch(closeList({ groupId: 'classModal', name: 'teachers' }))
    dispatch(unsetClassDate())
    dispatch(resetForm('class'))

  },
  updateDate: value => {
    dispatch(updateFormField({ formId: 'class', formField: 'date', value }))
  },
  updateFormField: (formField, value) => {
    dispatch(updateFormField({ formId: 'class', formField, value }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassModal)
