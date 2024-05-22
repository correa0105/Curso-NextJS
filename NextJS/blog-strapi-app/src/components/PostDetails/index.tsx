import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({
  date,
  author,
  category,
}: PostDetailsProps) => {
  return (
    <Container>
      Publicador em <Date date={date} /> por {author} em{' '}
      {category}
    </Container>
  );
};
