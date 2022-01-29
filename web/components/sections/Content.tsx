import type { NextPage } from 'next';
import Container from '@/components/layout/Container';

type Props = { images: string[]; text: string };

const Content: NextPage<Props> = () => {
  return (
    <section>
      <Container>Content</Container>
    </section>
  );
};

export default Content;
