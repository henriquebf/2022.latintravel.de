import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import sizes from '@/config/sizes.json';
import { getContent, getThumb } from '@/helpers/contentHelper';

type Props = { language: string; section: string; thumb: string };

const Thumb: NextPage<Props> = ({ language, section, thumb }) => {
  return (
    <div className="thumb">
      <Link href={`/${language}/${section}/${thumb}`} passHref>
        <a>
          <div className="thumb-container">
            <div className="image">
              <Image
                src={getThumb(section, thumb)}
                alt="image"
                layout={'fill'}
                objectFit={'cover'}
              />
            </div>
            <span className="text">
              {getContent(language, [section, thumb, 'intro', 'title'])}
            </span>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .thumb-container {
          position: relative;
        }

        .image {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 200px;
        }

        .text {
          position: absolute;
          z-index: 2;
          bottom: 0;
          right: 0;
          padding: 10px;
          font-weight: 400;
          background-color: rgba(255, 255, 255, 0.5);
        }

        @media (min-width: ${sizes.container}) {
          .image {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default Thumb;
