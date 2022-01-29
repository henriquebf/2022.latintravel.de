import type { NextPage } from 'next';
import Container from '@/components/layout/Container';

type Props = { title: string; description: string; backgroundImage: string };

const Intro: NextPage<Props> = ({ title, description, backgroundImage }) => {
  return (
    <section className="intro">
      <Container>
        <div>{title}</div>
        <div>{description}</div>
      </Container>
      <style jsx>{`
        .intro {
          background-image: url(${backgroundImage});
        }
      `}</style>
    </section>
  );
};

export default Intro;
