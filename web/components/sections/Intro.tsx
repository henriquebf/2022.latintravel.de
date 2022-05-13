import type { NextPage } from 'next';
import Image from 'next/image';
import colors from '@/config/colors.json';
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
            <div className="text">
              <div className="image">
                <Image
                  src="/logo-intro.png"
                  width="200"
                  height="86"
                  alt="logo"
                />
              </div>
              <h1>{title}</h1>
              <div className="border"></div>
              <h3>{description}</h3>
            </div>
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

        .image {
          margin-bottom: 25px;
          text-align: center;
        }

        h1,
        h3 {
          font-weight: 400;
          padding: 0;
          margin: 0;
        }

        h3 {
          margin-top: 10px;
        }

        .text {
          padding: 20px;
          color: white;
          background-color: rgba(0, 0, 0, 0.75);
        }

        .border {
          margin-top: 10px;
          border-top: 1px solid ${colors.light.border_highlight_color};
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
