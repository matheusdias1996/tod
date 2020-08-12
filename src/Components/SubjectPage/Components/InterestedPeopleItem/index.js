import { connect } from 'react-redux'

import { fillForm, openModal, setClassDate, updateCheckboxesGroup } from '../../../../actions'
import InterestedPeopleItem from './view'

const mapStateToProps = state => ({
  classes: state.classes,
  form: state.forms.class,
  me: state.me._id,
  role: state.me.role,
  subject: state.subject,
})

const mapDispatchToProps = dispatch => ({
  fillForm: form => {
    dispatch(fillForm({ formId: 'class', form }))
  },
  openModal: (modalId, classDate) => {
    if (classDate) {
      dispatch(setClassDate(classDate))
    }
    dispatch(openModal(modalId))
  },
  updateForm: (formField, formKey, checked) => {
    dispatch(updateCheckboxesGroup({ formId: 'class', formField, formKey, checked }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InterestedPeopleItem)
