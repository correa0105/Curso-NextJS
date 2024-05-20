import { POSTS_URL } from '@/config/app-config';
import { PostResponse } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts =
  async (): Promise<PostResponse> => {
    const posts = await fetchJson<PostResponse>(POSTS_URL);
    return posts;
  };
