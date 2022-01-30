import type { NextPage } from 'next';
import Container from '@/components/layout/Container';

type Props = { headline: string; text: string };

const Content: NextPage<Props> = ({ headline, text }) => {
  return (
    <section>
      <Container>
        <h3>{headline}</h3>
        <p>{text}</p>
      </Container>
      <style jsx>{`
        section {
        }
      `}</style>
    </section>
  );
};

export default Content;
