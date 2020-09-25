import { connect } from 'react-redux'

import { closeList, openList, addAttendedRequest, addNotAttendedRequest, deleteAttendedRequest, deleteNotAttendedRequest, updateFormField} from '../../actions'
import CollapsableList from './view'

const mapStateToProps = (state, ownProps) => ({
  open: state.collapsableLists[ownProps.groupId][ownProps.name],
  trained: state.forms.trained,
  untrained: state.forms.untrained,
  role: state.me ? state.me.role : null, // mudei isso
  token:  state.token
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeList: () => {
    dispatch(closeList({ groupId: ownProps.groupId, name: ownProps.name }))
  },
  openList: () => {
    dispatch(openList({ groupId: ownProps.groupId, name: ownProps.name }))
  },
  updateForm: (formId, formField, value) => {
    dispatch(updateFormField({ formField, formId, value }))
  },
  addAttended:(email, interestType, subjectId, token) => {  
    dispatch(addAttendedRequest({ email, interestType, subjectId, token }), console.log('request')) 
  },
  addNotAttended:(email, interestType, subjectId, token) => {
    dispatch(addAttendedRequest({ email, interestType, subjectId, token })) // trocar
  },
  deleteAttended:(email, interestType, subjectId, token) => {
    dispatch(deleteAttendedRequest({ email, interestType, subjectId, token }), console.log('request_del')) 
  },
  deleteNotAttended:(email, interestType, subjectId, token) => {
    dispatch(addAttendedRequest({ email, interestType, subjectId, token })) // trocar
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(CollapsableList)


