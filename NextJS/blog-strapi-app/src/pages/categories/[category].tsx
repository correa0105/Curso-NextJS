import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostResponse } from '@/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostResponse;
  category: string;
};

export default function Category({
  posts,
  category,
}: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const urlQuery = `&filters[category][name][$eq]=${ctx.query.category}&sort=id:desc&pagination[pageSize]=30`;
    const posts = await getAllPosts(urlQuery);

    return {
      props: { posts, category: ctx.query.category },
      revalidate: 5,
    };
  };
