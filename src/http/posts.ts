import { PostListResponseDto, PostResponseDto, ResponseDto } from '@dto/responseDto';
import { apiClient } from '@http/apiClient';

//게시판 전체 조회
export async function fetchPosts({ boardType, emotion }: { boardType: string; emotion: string }) {
  console.log('boardType:', boardType);
  console.log('emotion:', emotion);

  //   const response = await apiClient.get<PostListResponseDto[]>(`/posts?boardType=${boardType}&emotion=${emotion}`);
  //   console.log('data가져오기:', response.data);
  //   return response.data;
  // }

  const response = await apiClient.get<PostListResponseDto>(`/posts?boardType=${boardType}&emotion=${emotion}`);
  console.log('게시물 가져오눈즁', response.data.data);
  return response.data.data;
}

//특정 게시물 조회
export async function fetchPost({ id }: any) {
  console.log(`해당 게시물을 가져옴`);
  const {
    data: { data },
  } = await apiClient.get<PostResponseDto>(`/posts/${id}`);
  return data;
}

//TODO : 🍎게시글 생성 - 아래처럼 들어가야한다

export async function createPost(title: string, content: string, emotion: string, boardType: string) {
  const { data } = await apiClient.post<PostListResponseDto>('/posts', {
    title,
    content,
    emotion,
    boardType,
  });
  return data;
}

// 게시글 수정
export async function updatePost(title: string, content: string, emotion: string) {
  const { data } = await apiClient.patch<PostListResponseDto>(`/posts`, {
    title,
    content,
    emotion,
  });
  return data;
}

// 게시글 삭제
export async function deletePost(id: any) {
  await apiClient.delete(`/post/${id}`);
  return null;
}
// export async function fetchPost(): Promise<Post[]> {
//   const { data } = await apiClient.get<Post[]>('/posts');
//   return data;
// }
