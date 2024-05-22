import { Post } from '@/containers/Post';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <>
      <Post post={post} />
    </>
  );
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx,
) => {
  const slug = ctx.params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const posts = await getPost(slug);

  return {
    props: { post: posts.data[0] },
    revalidate: 5,
  };
};
