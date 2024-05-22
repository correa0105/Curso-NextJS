import { Comments } from '@/components/Comments/indext';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { SITE_NAME } from '@/config/app-config';
import { removeHtml } from '@/data/posts/remove-html';
import { PostData } from '@/domain/posts/post';
import Head from 'next/head';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(
            post.attributes.content[0].children[0].text,
          )}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={
            post.attributes.cover.data.attributes.formats
              .large.url
          }
          alt={post.attributes.title}
        />
        <PostDetails
          author={
            post.attributes.author.data.attributes.name
          }
          category={
            post.attributes.category.data.attributes.name
          }
          date={post.attributes.publishedAt}
        />
        <div>
          {post.attributes.content[0].children[0].text}
        </div>
        <Comments
          slug={post.attributes.slug}
          title={post.attributes.title}
        />
      </MainContainer>
      <Footer />
    </>
  );
};
