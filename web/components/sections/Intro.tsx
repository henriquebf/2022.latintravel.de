import type { NextPage } from 'next';
import sizes from '@/config/sizes.json';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/layout/Container';

type Props = { title: string; description: string; backgroundImage: string };

const Intro: NextPage<Props> = ({ title, description, backgroundImage }) => {
  return (
    <section>
      <Container>
        <div className="intro">
          <div></div>
          <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
          </div>
        </div>
      </Container>
      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          z-index: ${zIndexes.section};
          position: relative;
          height: 100vh;
          background-image: url(${backgroundImage});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        h1,
        h3 {
          font-weight: 400;
          padding: 0;
          margin: 0;
        }

        @media (min-width: ${sizes.container}) {
          .intro {
            display: grid;
            grid-template-columns: 50% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;
