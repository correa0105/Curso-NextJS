import { POSTS_URL } from '@/config/app-config';
import { PostResponse } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (
  slug: string | string[],
): Promise<PostResponse> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?filters[slug][$eq]=${slugString}`;
  const jsonPost = await fetchJson<PostResponse>(url);
  return jsonPost;
};
