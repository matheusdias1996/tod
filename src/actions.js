import { createAction } from 'redux-actions';

export const addSubjectRequest = createAction('ADD_SUBJECT_REQUEST')
// export const addSubjectReceived = createAction('ADD_SUBJECT_RECEIVED')
export const cancelEditingProfile = createAction('CANCEL_EDITING_PROFILE')
export const cancelEditingSubject = createAction('CANCEL_EDITING_SUBJECT')
export const changePasswordRequest = createAction('CHANGE_PASSWORD_REQUEST')
export const closeClassRequest = createAction('CLOSE_CLASS_REQUEST')
export const closeClassReceived = createAction('CLOSE_CLASS_RECEIVED')
export const closeList = createAction('CLOSE_LIST')
export const closeModal = createAction('CLOSE_MODAL')
export const confirmClassRequest = createAction('CONFIRM_CLASS_REQUEST')
export const confirmTokenRequest = createAction('CONFIRM_TOKEN_REQUEST')
export const confirmTokenReceived = createAction('CONFIRM_TOKEN_RECEIVED')
export const deleteClassRequest = createAction('DELETE_CLASS_REQUEST')
export const deleteClassReceived = createAction('DELETE_CLASS_RECEIVED')
export const deleteSubjectRequest = createAction('DELETE_SUBJECT_REQUEST')
export const deleteSubjectReceived = createAction('DELETE_SUBJECT_RECEIVED')
export const fadeMessageOut = createAction('FADE_MESSAGE_OUT')
export const fillForm = createAction('FILL_FORM')
export const getClassesRequest = createAction('GET_CLASSES_REQUEST')
export const getClassesReceived = createAction('GET_CLASSES_RECEIVED')
export const getMeReceived = createAction('GET_ME_RECEIVED')
export const getMeRequest = createAction('GET_ME_REQUEST')
export const getSubjectRequest = createAction('GET_SUBJECT_REQUEST')
export const getSubjectReceived = createAction('GET_SUBJECT_RECEIVED')
export const getSubjectsRequest = createAction('GET_SUBJECTS_REQUEST')
export const getSubjectsReceived = createAction('GET_SUBJECTS_RECEIVED')
export const loginReceived = createAction('LOGIN_RECEIVED')
export const loginRequest = createAction('LOGIN_REQUEST')
export const logout = createAction('LOGOUT')
export const openList = createAction('OPEN_LIST')
export const openModal = createAction('OPEN_MODAL')
export const registerRequest = createAction('REGISTER_REQUEST')
// export const resendTokenReceived = createAction('RESEND_TOKEN_RECEIVED')
export const resetForm = createAction('RESET_FORM')
export const resendTokenRequest = createAction('RESEND_TOKEN_REQUEST')
// export const scheduleClassReceived = createAction('SCHEDULE_CLASS_RECEIVED')
export const scheduleClassRequest = createAction('SCHEDULE_CLASS_REQUEST')
export const removeInterestRequest = createAction('REMOVE_INTEREST_REQUEST')
export const resetPasswordRequest = createAction('RESET_PASSWORD_REQUEST')
export const setClassDate = createAction('SET_CLASS_DATE')
export const setMessage = createAction('SET_MESSAGE')
export const showInterestRequest = createAction('SHOW_INTEREST_REQUEST')
export const startEditingProfile = createAction('START_EDITING_PROFILE')
export const startEditingSubject = createAction('START_EDITING_SUBJECT')
// export const showInterestReceived = createAction('SHOW_INTEREST_RECEIVED')
export const unsetClassDate = createAction('UNSET_CLASS_DATE')
export const updateCheckboxesGroup = createAction('UPDATE_CHECKBOXES_GROUP')
export const updateClassRequest = createAction('UPDATE_CLASS_REQUEST')
export const updateClassReceived = createAction('UPDATE_CLASS_RECEIVED')
export const updateFormField = createAction('UPDATE_FORM_FIELD')
export const updateSubjectRequest = createAction('UPDATE_SUBJECT_REQUEST')
export const updateSubjectsFilter = createAction('UPDATE_SUBJECTS_FILTER')
export const updateUserRequest = createAction('UPDATE_USER_REQUEST')

export const addAttendedRequest = createAction('addAttended') 
export const addNotAttendedRequest = createAction('addNotAttended') 
export const deleteAttendedRequest = createAction('deleteAttended') 
export const deleteNotAttendedRequest = createAction('deleteNotAttended') 

// export const Request = createAction('REQUEST')
// export const Received = createAction('RECEIVED')
