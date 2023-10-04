import { fetchPost, fetchPosts } from '@http/posts';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

//전체 게시물 조회
export function usePosts(boardType: string, emotion: string) {
  return useQuery(['posts', { boardType, emotion }], () => fetchPosts({ boardType, emotion }));
}
// export function usePosts() {
//   return useQuery(['posts', 'current'], () => fetchPosts());
// }

//특정 게시물 조회
export function usePost(id: number) {
  const { data: post, error, isLoading } = useQuery(['post', 'current'], () => fetchPost({ id }));
  return { post, error, isLoading };
}

// TODO: ✅ 리액트쿼리(게시글 조회)
// useQuery의 첫번째 파라미터는 unique key, 두번째는 실제 호출할 비동기 함수가 들어감
