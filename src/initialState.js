export default {
  classDate: null,
  collapsableLists: {
    subjectPage: {
      students: false,
      teachers: false,
      trained: false,
    },
    classModal: {
      students: false,
      teachers: false,
    },
  },
  editingProfile: false,
  editingSubject: false,
  forms: {
    addSubject: {
      description: '',
      name: '',
    },
    changePassword: {
      confirmPassword: '',
      password: '',
    },
    class: {
      date: null,
      npsURL: '',
      room: '',
      students: {},
      teachers: {},
    },
    confirm: {
      email: '',
    },
    editSubject: {
      description: '',
      name: '',
    },
    forgotPassword: {
      email: '',
    },
    login: {
      email: '',
      password: '',
    },
    profile: {
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
    },
    register: {
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
    },
    trained: {
      email: ''
    },
    untrained: {
      email: ''
    }
  },
  me: null,
  message: null,
  modals: {
    addClass: false,
    addSubject: false,
    authentication: false,
    classAttendance: false,
    editClass: false,
    removeClass: false,
    removeSubject: false,
  },
  subject: null,
  subjects: [],
  subjectsFilter: '',
  subjectsSort: 'Alphabetically',
  token: null,
}
