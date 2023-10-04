import { UserDto } from '@dto/userDto';
import { fetchUser } from '@http/users';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// async function _fetchUser() {
//   try {
//     const user = await fetchUser();
//     console.log('로그인 완료!');
//     return user;
//   } catch (error) {
//     console.log('로그인 안됐어요!!!!!!!!');
//     return null; // undefined 나면 에러ㅡㅡ
//   }
// }

// component -> state(hook) -> http
// export function useUser() {
//   const { data: user } = useQuery(['users', 'current'], _fetchUser, {
//     // retry: 0,
//     // suspense: true,
//     // useErrorBoundary: true,
//   });
//   console.log('useUser부분', user);

//   return { user };
// }

//다시!!
export function useUser() {
  const [user, setUser] = useState<undefined | UserDto>();

  async function _fetchUser() {
    try {
      const user = await fetchUser();
      console.log('로그인 완료!');
      console.log('useUser부분1', user);
      // return user;
      setUser(user); //성공시 유저에 담기
    } catch (error) {
      console.log('로그인 안됐어요!!!!!!!!');
      return null; // undefined 나면 에러ㅡㅡ
    }
  }
  console.log('useUser부분1111', user);

  useEffect(() => {
    _fetchUser();
  }, []);

  console.log('useUser부분2', user);

  return { user };
}
