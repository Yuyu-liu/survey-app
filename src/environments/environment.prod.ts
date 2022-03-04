const API_URL = 'https://evening-spire-81197.herokuapp.com';
export const environment = {
  production: true,

  user: API_URL + '/users',
  token: API_URL + '/token',

  recaptcha: {
    siteKey: '6LcRqLEeAAAAAPjvfJO2WkltEsgS5VB_O8flh2Yl',
  },
};
