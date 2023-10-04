import { SERVER_URL } from '../common/constants';
import axios from 'axios';

// TODO: ✅Axios 인터셉터 적용하기 -> api요청을 모두 한 곳에서 처리, 유지보수 향상, 후에 토큰 만료 시 자동 갱신(로그인 연장) 로직에 쓸 수 있다

// 1. axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true, // 쿠키사용
});

// 2. 요청 인터셉터 추가하기 - 미완
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
