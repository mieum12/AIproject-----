import { SERVER_URL } from '../common/constants';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true, // 쿠키사용
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401처리
    return Promise.reject(error);
  },
);

export { apiClient };
