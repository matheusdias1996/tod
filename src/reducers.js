import { handleActions } from 'redux-actions'

import {
  cancelEditingProfile,
  cancelEditingSubject,
  closeList,
  closeModal,
  confirmTokenReceived,
  fadeMessageOut,
  fillForm,
  getClassesReceived,
  getClassesRequest,
  getMeReceived,
  getSubjectReceived,
  getSubjectRequest,
  getSubjectsReceived,
  getSubjectsRequest,
  loginReceived,
  logout,
  openList,
  openModal,
  resetForm,
  setClassDate,
  setMessage,
  startEditingProfile,
  startEditingSubject,
  unsetClassDate,
  updateCheckboxesGroup,
  updateFormField,
  updateSubjectsFilter,
} from './actions'

import initialState from './initialState'

export default handleActions({
  [cancelEditingSubject]: (state, action) => ({
    ...state,
    editingSubject: false,
  }),
  [cancelEditingProfile]: (state, action) => ({
    ...state,
    editingProfile: false,
  }),
  [closeList]: (state, action) => ({
    ...state,
    collapsableLists: {
      ...state.collapsableLists,
      [action.payload.groupId]: {
        ...state.collapsableLists[action.payload.groupId],
        [action.payload.name]: false,
      },
    },
  }),
  [closeModal]: (state, action) => ({
    ...state,
    modals: {
      ...state.modals,
      [action.payload]: false,
    },
  }),
  [confirmTokenReceived]: (state, action) => ({
    ...state,
    token: action.payload,
  }),
  [fadeMessageOut]: (state, action) => ({
    ...state,
    message: {
      ...state.message,
      fadingOut: true,
    },
  }),
  [fillForm]: (state, action) => ({
    ...state,
    forms: {
      ...state.forms,
      [action.payload.formId]: action.payload.form,
    },
  }),
  [getClassesReceived]: (state, action) => {
    let subject = {
      ...state.subject
    }

    const filteredAndSortedClasses = action.payload.filter(clazz => (new Date(clazz.date) > new Date()))
      .slice()
      .sort((a, b) => (a.date < b.date ? -1 : (a.date > b.date ? 1 : 0)))

    const insertNextClassDateIntoUser = clazz => {
      const checkDateAndInsertIntoStudent = user => {
        const userId = user._id
        if (!subject.users[userId]['studentDate']) {
          subject.users[userId]['studentDate'] = clazz.date
        }
      }

      const checkDateAndInsertIntoTeacher = user => {
        const userId = user._id
        if (!subject.users[userId]['teacherDates']) {
          subject.users[userId]['teacherDates'] = [clazz.date]
        } else {
          subject.users[userId]['teacherDates'].push(clazz.date)
        }
      }

      clazz.teachers.forEach(checkDateAndInsertIntoTeacher)
      clazz.students.forEach(checkDateAndInsertIntoStudent)
    }

    filteredAndSortedClasses.forEach(insertNextClassDateIntoUser)

    return {
      ...state,
      classes: filteredAndSortedClasses,
      subject,
    }
  },
  [getClassesRequest]: (state, action) => ({
    ...state,
    classes: [],
  }),
  [getMeReceived]: (state, action) => ({
    ...state,
    me: action.payload,
  }),
  [getSubjectReceived]: (state, action) => {
    let subject = action.payload
    subject.users = {}

    const insertUserAndGetId = user => {
      if (!subject.users[user._id]) {
        subject.users[user._id] = user
        subject.users[user._id].teacherDates = []
      }
      return user._id
    }

    subject.teachers = subject.teachers.map(insertUserAndGetId)
    subject.students = subject.students.map(insertUserAndGetId)
    subject.trained = subject.trained.map(insertUserAndGetId)

    return {
      ...state,
      classes: [],
      editingSubject: false,
      subject,
    }
  },
  [getSubjectRequest]: (state) => ({
    ...state,
    classes: [],
  }),
  [getSubjectsReceived]: (state, action) => ({
    ...state,
    classes: [],
    subject: null,
    subjects: action.payload,
  }),
  [getSubjectsRequest]: (state) => ({
    ...state,
    classes: [],
    subject: null,
    subjects: [],
  }),
  [loginReceived]: (state, action) => ({
    ...state,
    token: action.payload,
    forms: initialState.forms,
  }),
  [logout]: (state, action) => ({
    ...state,
    me: null,
    token: null,
  }),
  [openList]: (state, action) => ({
    ...state,
    collapsableLists: {
      ...state.collapsableLists,
      [action.payload.groupId]: {
        ...state.collapsableLists[action.payload.groupId],
        [action.payload.name]: true,
      },
    },
  }),
  [openModal]: (state, action) => ({
    ...state,
    modals: {
      ...state.modals,
      [action.payload]: true,
    },
  }),
  [resetForm]: (state, action) => ({
    ...state,
    forms: {
      ...state.forms,
      [action.payload]: initialState.forms[action.payload],
    },
  }),
  [setClassDate]: (state, action) => ({
    ...state,
    classDate: action.payload,
  }),
  [setMessage]: (state, action) => ({
    ...state,
    message: action.payload,
  }),
  [startEditingSubject]: (state, action) => ({
    ...state,
    editingSubject: action.payload,
    forms: {
      ...state.forms,
      editSubject: {
        description: state.subject.description,
        name: state.subject.name,
      },
    },
  }),
  [startEditingProfile]: (state, action) => ({
    ...state,
    editingProfile: true,
    forms: {
      ...state.forms,
      profile: {
        email: state.me.email,
        name: state.me.name,
        password: '',
      },
    },
  }),
  [unsetClassDate]: (state, action) => ({
    ...state,
    classDate: null,
  }),
  [updateCheckboxesGroup]: (state, action) => ({
    ...state,
    forms: {
      ...state.forms,
      [action.payload.formId]: {
        ...state.forms[action.payload.formId],
        [action.payload.formField]: {
          ...state.forms[action.payload.formId][action.payload.formField],
          [action.payload.formKey]: action.payload.checked || undefined,
        }
      },
    },
  }),
  [updateFormField]: (state, action) => ({
    ...state,
    forms: {
      ...state.forms,
      [action.payload.formId]: {
        ...state.forms[action.payload.formId],
        [action.payload.formField]: action.payload.value,
      },
    }
  }),
  [updateSubjectsFilter]: (state, action) => ({
    ...state,
    subjectsFilter: action.payload,
  }),
}, initialState)
