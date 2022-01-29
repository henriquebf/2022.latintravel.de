import type { NextPage } from 'next';
import Container from '@/components/layout/Container';

type Props = { images: string[]; paragraphs: string[] };

const Content: NextPage<Props> = ({ images, paragraphs }) => {
  return (
    <section>
      <Container>
        {images.map((i, _i) => (
          <p key={_i}>{i}</p>
        ))}
        {paragraphs.map((p, _i) => (
          <p key={_i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </Container>
      <style jsx>{`
        section {
        }
      `}</style>
    </section>
  );
};

export default Content;
