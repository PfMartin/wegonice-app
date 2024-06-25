const apiPrefix = 'http://localhost:8000/api/v1/'

enum RequestMethod {
  POST = 'POST',
}

export const loginUser = async (email: string, password: string) => {
  const credentials = JSON.stringify({
    email: email,
    password: password,
  })

  const res = await fetch(`${apiPrefix}auth/login`, {
    method: RequestMethod.POST,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: credentials,
  })

  if (!res.ok) {
    console.warn('An error occured during login')
    return
  }

  console.warn('Successfully logged in: ', res.body)
}
