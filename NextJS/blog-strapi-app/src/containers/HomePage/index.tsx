import { PostResponse } from '@/domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostResponse;
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      {posts.data.map((post) => (
        <h2 key={post.attributes.slug}>
          {post.attributes.title}
        </h2>
      ))}
    </Container>
  );
}
