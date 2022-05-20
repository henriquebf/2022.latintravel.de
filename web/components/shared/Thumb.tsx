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
            <div className="background" />
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
          height: 400px;
        }

        .background {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0);
          transition: background-color 0.25s;
        }

        .text {
          position: absolute;
          z-index: 3;
          top: 0;
          right: 0;
          padding: 10px;
          font-weight: 400;
          background-color: rgba(255, 255, 255, 0.5);
        }

        @media (min-width: ${sizes.container}) {
          .image {
            height: 400px;
          }

          .background:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Thumb;
