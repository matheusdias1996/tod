import { takeEvery, call, put } from 'redux-saga/effects'
import history from './history'

import {
  addSubject,
  changePassword,
  closeClass,
  confirmClass,
  confirmToken,
  deleteClass,
  deleteSubject,
  getClasses,
  getMe,
  getSubject,
  getSubjects,
  login,
  register,
  removeInterest,
  resendToken,
  resetPassword,
  scheduleClass,
  showInterest,
  updateClass,
  updateSubject,
  updateUser,
  addNotAttended,
  addAttended,
  deleteNotAttended,
  deleteAttended
} from './api'

import {
  addSubjectRequest,
  cancelEditingProfile,
  changePasswordRequest,
  closeClassRequest,
  closeModal,
  confirmClassRequest,
  confirmTokenRequest,
  confirmTokenReceived,
  deleteClassRequest,
  deleteSubjectRequest,
  fadeMessageOut,
  getClassesRequest,
  getClassesReceived,
  getMeReceived,
  getMeRequest,
  getSubjectRequest,
  getSubjectReceived,
  getSubjectsRequest,
  getSubjectsReceived,
  loginReceived,
  loginRequest,
  logout,
  registerRequest,
  removeInterestRequest,
  resetPasswordRequest,
  resendTokenRequest,
  resetForm,
  scheduleClassRequest,
  setMessage,
  showInterestRequest,
  updateClassRequest,
  updateSubjectRequest,
  updateUserRequest,
  addNotAttendedRequest,
  addAttendedRequest,
  deleteNotAttendedRequest,
  deleteAttendedRequest
  // Request,
  // Received,
} from './actions'

function* handleAPICall(response, callback, payload) {
  if (response.err) {
    if (response.err.originalError && response.err.originalError.name === 'TokenExpiredError') {
      yield put(logout())
    } else {
      yield put(setMessage({ type: 'error', message: response.err.msg }))
    }
    return
  } else if (response.success) {
    yield put(setMessage({ type: 'success', message: response.success.msg }))
  }
  if (callback) {
    yield callback(response, payload)
  }
}

function createCall(apiCall, callback, keepMessage) {
  return function* ({ payload }) {
    if (!keepMessage) {
      yield put(setMessage(null))
    }
    yield handleAPICall(yield call(apiCall, payload), callback, payload)
  }
}

const callAddSubject = createCall(addSubject, function* (res, { token }) {
  yield put(getSubjectsRequest(token))
  yield put(closeModal('addSubject'))
  yield put(resetForm('addSubject'))
})

const callChangePassword = createCall(changePassword, function () {
  history.push('/index')
})

const callCloseClass = createCall(closeClass, function* (res, { subjectId, token }) {
  yield put(getSubjectRequest({ id: subjectId, token }))
  yield put(closeModal('classAttendance'))
})

const callConfirmClass = createCall(confirmClass)

const callConfirmToken = createCall(confirmToken, function* ({ token }) {
  yield put(confirmTokenReceived(token))
})

const callDeleteClass = createCall(deleteClass, function* (res, { subjectId, token }) {
  yield put(getSubjectRequest({ id: subjectId, token }))
  yield put(closeModal('removeClass'))
})

const callDeleteSubject = createCall(deleteSubject, function* (res, { token }) {
  history.push('/index')
  yield put(getSubjectsRequest(token))
  yield put(closeModal('removeSubject'))
})

function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
}

const callFadeOut = function* () {
  yield timeout(500)
  yield put(setMessage(null))
}

const callGetClasses = createCall(getClasses, function* ( classes ) {
  yield put(getClassesReceived(classes))
}, true)

const callGetMe = createCall(getMe, function* (me) {
  yield put(getMeReceived(me))
}, true)

const callGetSubject = createCall(getSubject, function* ( subject, { token } ) {
  yield put(getClassesRequest({ subjectId: subject._id, token }))
  yield put(getSubjectReceived(subject))
}, true)

const callGetSubjects = createCall(getSubjects, function* ( subjects ) {
  yield put(getSubjectsReceived(subjects))
}, true)

const callLogin = createCall(login, function* ({ token }) {
  yield put(loginReceived(token))
  yield put(closeModal('authentication'))
})

const callAddAttended = createCall(addAttended, function* (res, { subjectId, token }) { // Pq não precisa de subjectId aqui? 
  console.log('oi_sagas')
  yield put(getSubjectRequest({ id: subjectId, token }))
  //yield put(addAttendedRequest({ token }))
})

const callDeleteAttended = createCall(deleteAttendedRequest, function* (res, { token }) {
  yield put(getSubjectRequest({  token }))
})

const callAddNotAttended = createCall(addNotAttendedRequest, function* (res, { token }) {
  yield put(getSubjectRequest({ token }))
})

const calldeleteNotAttended = createCall(deleteNotAttendedRequest, function* (res, { token }) {
  yield put(getSubjectRequest({token }))
})
/*
const calldeleteAttended = createCall(login, function* ({ token }) {
  yield put(loginReceived(token))
  yield put(closeModal('authentication'))
})

const calladd = createCall(login, function* ({ token }) {
  yield put(loginReceived(token))
  yield put(closeModal('authentication'))
})

const callLogin = createCall(login, function* ({ token }) {
  yield put(loginReceived(token))
  yield put(closeModal('authentication'))
})
*/


const callRegister = createCall(register, function* () {
  yield put(closeModal('authentication'))
})

const callRemoveInterest = createCall(removeInterest, function* (res, { subjectId, token }) {
  yield put(getSubjectRequest({ id: subjectId, token }))
})

const callResendToken = createCall(resendToken)

const callResetPassword = createCall(resetPassword)

const callScheduleClass = createCall(scheduleClass, function* (res, { subjectId, token }) {
  yield put(getSubjectRequest({ id: subjectId, token }))
  yield put(closeModal('addClass'))
})

const callShowInterest = createCall(showInterest, function* (res, { subjectId, token }) {
  yield put(getSubjectRequest({ id: subjectId, token }))
})

const callUpdateClass = createCall(updateClass, function* (res, { subjectId, token }) {
  yield put(getSubjectRequest({ id: subjectId, token }))
  yield put(closeModal('editClass'))
})

const callUpdateSubject = createCall(updateSubject, function* (subject, { token }) {
  yield put(setMessage({ type: 'success', message: 'Subject: ' + subject.name + ' was updated.' }))
  yield put(getClassesRequest({ subjectId: subject._id, token }))
  yield put(getSubjectReceived(subject))
})

const callUpdateUser = createCall(updateUser, function* (res, { token }) {
  yield put(getMeRequest(token))
  yield put(cancelEditingProfile())
})

export default function* rootSaga(history) {
  yield takeEvery(addSubjectRequest().type, callAddSubject)
  yield takeEvery(changePasswordRequest().type, callChangePassword)
  yield takeEvery(closeClassRequest().type, callCloseClass)
  yield takeEvery(confirmClassRequest().type, callConfirmClass)
  yield takeEvery(confirmTokenRequest().type, callConfirmToken)
  yield takeEvery(deleteClassRequest().type, callDeleteClass)
  yield takeEvery(deleteSubjectRequest().type, callDeleteSubject)
  yield takeEvery(fadeMessageOut().type, callFadeOut)
  yield takeEvery(getClassesRequest().type, callGetClasses)
  yield takeEvery(getMeRequest().type, callGetMe)
  yield takeEvery(getSubjectRequest().type, callGetSubject)
  yield takeEvery(getSubjectsRequest().type, callGetSubjects)
  yield takeEvery(loginRequest().type, callLogin)
  yield takeEvery(registerRequest().type, callRegister)
  yield takeEvery(removeInterestRequest().type, callRemoveInterest)
  yield takeEvery(resendTokenRequest().type, callResendToken)
  yield takeEvery(resetPasswordRequest().type, callResetPassword)
  yield takeEvery(scheduleClassRequest().type, callScheduleClass)
  yield takeEvery(showInterestRequest().type, callShowInterest)
  yield takeEvery(updateClassRequest().type, callUpdateClass)
  yield takeEvery(updateSubjectRequest().type, callUpdateSubject)
  yield takeEvery(updateUserRequest().type, callUpdateUser)
  yield takeEvery(addAttendedRequest().type, callAddAttended)
}
