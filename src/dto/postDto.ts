export interface PostDto {
  id: string;
  nickname: string;
  title: string;
  content: string;
  author: {
    createdAt: string | null;
    deletedAt: string | null;
    email: string;
    id: number;
    isAdmin: boolean;
    nickname: string;
    platform: 'KAKAO' | 'NAVER';
    profileImage?: string;
    updatedAt: string | null;
  };
  boardType: string;
  emotion: number;
  createdAt: string;
  bookmarksCnt: number;
  commentsCnt: number;
  updatedAt: string;
}

export interface PostDetailDto {
  post: PostDto;
  comments: {
    id: number;
    author: {
      name: string;
    };
    content: string;
    created_at: number;
    updated_at: number;
  }[];
}
