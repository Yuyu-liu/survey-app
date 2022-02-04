const API_URL = 'https://' + window.location.hostname + '/api';
export const environment = {
  production: true,

  user: API_URL + '/users',
  token: API_URL + '/token',
};
