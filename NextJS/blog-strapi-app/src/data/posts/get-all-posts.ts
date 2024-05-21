import { POSTS_URL } from '@/config/app-config';
import { PostResponse } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async (
  query = '',
): Promise<PostResponse> => {
  const url = `${POSTS_URL}?populate=category,author,user,cover&${query}`;
  const posts = await fetchJson<PostResponse>(url);
  return posts;
};
