import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostResponse } from '../domain/posts/post';
import { GetStaticProps } from 'next';
import HomePage from '@/containers/HomePage';

export type HomeProps = {
  posts: PostResponse;
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    '&sort=id:desc&pagination[pageSize]=30',
  );

  return {
    props: { posts },
    revalidate: 5,
  };
};
