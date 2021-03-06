import type { NextPage } from 'next';
import Image from 'next/image';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';

type Props = { images: string[]; paragraphs: string[] };

const Content: NextPage<Props> = ({ images, paragraphs }) => {
  return (
    <section>
      <Container>
        <div className="columns">
          <div>
            {images.map((i, _i) => (
              <div key={_i} className="image">
                <Image
                  src={i}
                  alt="image"
                  layout={'fill'}
                  objectFit={'cover'}
                />
              </div>
            ))}
          </div>
          <div className="text">
            {paragraphs.map((p, _i) => (
              <p key={_i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        section {
          padding: 65px 0;
        }

        .image {
          position: relative;
          width: 100%;
          height: 400px;
        }

        .text {
          font-size: 1.1em;
        }

        @media (min-width: ${sizes.container}) {
          .columns {
            display: grid;
            grid-template-columns: 50% 50%;
          }

          .text {
            padding-left: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Content;
