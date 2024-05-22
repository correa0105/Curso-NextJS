import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';
import { SITE_URL } from '@/config/app-config';

export type CommentProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-lucas"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Container>
  );
};
