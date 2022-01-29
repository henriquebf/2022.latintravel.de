import type { NextPage } from 'next';
import Container from '@/components/layout/Container';

type Props = {};

const About: NextPage<Props> = () => {
  return (
    <footer>
      <Container>footer</Container>
      <style jsx>{`
        footer {
        }
      `}</style>
    </footer>
  );
};

export default About;
