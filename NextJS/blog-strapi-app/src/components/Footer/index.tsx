import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/config/app-config';

export const Footer = () => {
  return (
    <Container>
      <Link href="/">Feito p/ Lucas Corrêa da Silva</Link>
    </Container>
  );
};
