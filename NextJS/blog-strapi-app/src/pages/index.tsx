import { useState, useEffect } from 'react';
import { PostResponse } from '../domain/posts/post';

const getPosts = async (): Promise<PostResponse> => {
  const posts = await fetch(
    'http://localhost:1337/api/posts?populate=category,author,user,cover',
  );

  const jsonPosts = await posts.json();
  return jsonPosts;
};

export default function Home() {
  const [posts, setPosts] = useState<PostResponse>({
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 0,
        pageCount: 0,
        total: 0,
      },
    },
  });

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, []);

  return (
    <div>
      {posts.data.map((post) => (
        <h2 key={post.attributes.slug}>
          {post.attributes.title}
        </h2>
      ))}
    </div>
  );
}
