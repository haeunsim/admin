import axios from 'axios';
import store from '../../redux/store';

const api = axios.create({
//   baseURL: 'https://ait-backend-auth.azurewebsites.net',
  baseURL: '',
});

const setAuthorization = (token) => {
  if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  else delete axios.defaults.headers.common['Authorization'];
};

api.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const { accessToken, refreshToken: currentRefreshToken } = state.Auth;

    if (accessToken && isTokenExpired(accessToken)) {
      try {
        const newTokens = await refreshToken(currentRefreshToken);
        store.dispatch(updateTokens(newTokens));
        config.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
      } catch (error) {
        console.error('토큰 갱신 실패:', error);
      }
    } else if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(
    //   'https://ait-backend-auth.azurewebsites.net/auth/v1/refresh', 
      '/auth/v1/refresh', 
      {refresh_token: refreshToken,}
    );
    return response.data;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    throw error;
  }
};

const isTokenExpired = (token) => {
  const decodedToken = jwt_decode(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

export default api;

async function login(params) {
  const baseUrl = '/auth/v1/signin';
  try {
    const response = await api.post(baseUrl, params);
    setAuthorization(response.data.accessToken);
    return response;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
}

function logout() {
  // api 없이 로그아웃
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
}

function signup(params) {
  const baseUrl = '/register/';
  return api.create(`${baseUrl}`, params);
}

function forgotPassword(params) {
  const baseUrl = '/forget-password/';
  return api.create(`${baseUrl}`, params);
}

function forgotPasswordConfirm(params) {
  const baseUrl = '/password/reset/confirm/';
  return api.create(`${baseUrl}`, params);
}

export { login, logout, signup, forgotPassword, forgotPasswordConfirm };
