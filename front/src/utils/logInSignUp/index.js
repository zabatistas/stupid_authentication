import axios from 'axios';

const handleErrorMessages = response => {
  console.log('error 400: ', response)
    const errorMessages = [];
    response.data.map(error => errorMessages.push(error.message));
    return errorMessages;
}

const setUpSession = (response, user) => {
    const receivedToken = response.data[0].token;
    localStorage.setItem('token', receivedToken);
    localStorage.setItem('user', user);
    axios.defaults.headers.common['authorization'] = `Bearer ${receivedToken}`;
    return ["Logged in"];
}

export const register = async (type, credentials) => {
  const url = `http://localhost:4000/${type}`;
  const {username, password} = credentials;
  console.log(url, credentials);
  const response = await axios.post(url, {
      username,
      password
    });
  console.log(response)
  if (response.status === 200) {
    return setUpSession(response, credentials.username);
  } else {
    return handleErrorMessages(response)
  }
};

