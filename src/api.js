let url = 'http://localhost:3001/api/'
//'https://api.trainingondemand.io/api/'
//'http://localhost:5000/'


//if (process.env.NODE_ENV === 'production') {
//  url = 'https://api.trainingondemand.io/api/'
//  }

const idMapToArray = map => Object.keys(map).filter(item => map[item])

export const addSubject = async ({ description, name, token }) => {
  return await (await fetch(url + 'subjects', {
    body: JSON.stringify({ description, name }),
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'POST',
  })).json()
}

export const changePassword = async ({ confirmPassword, password, token }) => {
  return await (await fetch(url + 'auth/changePassword/' + token, {
    body: JSON.stringify({ confirmPassword, password }),
    headers: { 'Content-Type':'application/json' },
    method: 'PUT',
  })).json()
}

export const confirmClass = async ({ answer, classId, token }) => {
  return await (await fetch(url + 'classes/confirm/' + classId + '/' + token + '/' + answer, {
    headers: { 'Content-Type':'application/json' },
    method: 'PUT',
  })).json()
}

export const confirmToken = async token => {
  return await (await fetch(url + 'auth/confirm/' + token, {
    headers: { 'Content-Type':'application/json' },
  })).json()
}

export const closeClass = async ({ npsURL, students, subjectId, date, token }) => {
  return await (await fetch(url + 'classes/close/bySubjectAndDate/' + subjectId + '/' + date, {
    body: JSON.stringify({ npsURL, students: idMapToArray(students) }),
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'PUT',
  })).json()
}

export const deleteClass = async ({ subjectId, date, token }) => {
  return await (await fetch(url + 'classes/bySubjectAndDate/' + subjectId + '/' + date, {
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'DELETE',
  })).json()
}

export const deleteSubject = async ({ id, token }) => {
  return await (await fetch(url + 'subjects/' + id, {
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'DELETE',
  })).json()
}

export const getClasses = async ({ subjectId, token }) => {
  return await (await fetch(url + 'classes/bySubject/' + subjectId, {
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'GET',
  })).json()
}

export const getMe = async token => {
  return await (await fetch(url + 'auth/me', {
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
  })).json()
}

export const getSubject = async ({ id, token }) => {
  console.log('getSubject')
  return await (await fetch(url + 'subjects/' + id, {
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'GET',
  })).json()
}

export const getSubjects = async token => {
  return await (await fetch(url + 'subjects', {
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'GET',
  })).json()
}

export const login = async ({ email, password }) => {
  return await (await fetch(url + 'auth/login', {
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })).json()
}

export const register = async ({ email, name, password, confirmPassword }) => {
  return await (await fetch(url + 'auth/register', {
    body: JSON.stringify({ email, name, password, confirmPassword }),
    headers: { 'Content-Type':'application/json' },
    method: 'POST',
  })).json()
}

export const removeInterest = async ({ interestType, subjectId, token }) => {
  return await (await fetch(url + 'subjects/removeInterest/' + subjectId, {
    body: JSON.stringify({ type: interestType }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    method: 'PUT',
  })).json()
}

export const addAttended = async ({email, interestType, subjectId, token }) => { 
  console.log('api')
  console.log('api2')
  return await (await fetch(url + 'subjects/addAttended/' + subjectId, {
    body: JSON.stringify({email: email, type: interestType }), // será que deixo o e-mail aqui mesmo?
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,

    },
    method: 'PUT',
  })).json()
}




export const addNotAttended = async ({email, interestType, subjectId, token }) => { // Add Not Attended
  return await (await fetch(url + 'subjects/addNotAttended/' + subjectId, {
    body: JSON.stringify({ email, type: 'untrained' }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    method: 'PUT',
  })).json()
}


export const deleteAttended = async ({email, interestType, subjectId, token }) => { // Delete Attended
  return await (await fetch(url + 'subjects/deleteAttended/' + subjectId, {
    body: JSON.stringify({ email, type: 'trained' }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    method: 'PUT',
  })).json()
}

export const deleteNotAttended = async ({email, interestType, subjectId, token }) => { // Delete Not Attended
  return await (await fetch(url + 'subjects/deleteNotAttended/' + subjectId, {
    body: JSON.stringify({ email, type: 'untrained' }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    method: 'PUT',
  })).json()
}

export const resendToken = async email => {
  return await (await fetch(url + 'auth/resendToken', {
    body: JSON.stringify({ email }),
    headers: { 'Content-Type':'application/json' },
    method: 'POST',
  })).json()
}

export const resetPassword = async email => {
  return await (await fetch(url + 'auth/resetPassword', {
    body: JSON.stringify({ email }),
    headers: { 'Content-Type':'application/json' },
    method: 'POST',
  })).json()
}

export const scheduleClass = async ({ date, room, duration, students, subjectId, teachers, token }) => {
  return await (await fetch(url + 'classes', {
    body: JSON.stringify({
      date,
      duration,
      room,
      students: idMapToArray(students),
      subjectId,
      teachers: idMapToArray(teachers),
    }),
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'POST',
  })).json()
}

export const showInterest = async ({ interestType, subjectId, token }) => {
  console.log(interestType, subjectId, token)
  return await (await fetch(url + 'subjects/showInterest/' + subjectId, {
    body: JSON.stringify({ type: interestType }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    method: 'PUT',
  })).json()
}

export const updateClass = async ({ newDate, room, students, teachers, subjectId, oldDate, token }) => {
  return await (await fetch(url + 'classes/bySubjectAndDate/' + subjectId + '/' + oldDate, {
    body: JSON.stringify({
      date: newDate,
      room,
      students: idMapToArray(students),
      teachers: idMapToArray(teachers),
    }),
    headers: {
      'Content-Type':'application/json',
      'x-access-token': token,
    },
    method: 'PUT',
  })).json()
}

export const updateSubject = async ({ description, name, subjectId, token }) => {
  return await (await fetch(url + 'subjects/' + subjectId, {
    body: JSON.stringify({ description, name }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    method: 'PUT',
  })).json()
}

export const updateUser = async ({ email, id, name, password, confirmPassword, token }) => {
  return await (await fetch(url + 'users/' + id, {
    body: JSON.stringify({ email, name, password: (password ? password : undefined), confirmPassword: (confirmPassword ? confirmPassword : undefined) }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    method: 'PUT',
  })).json()
}
