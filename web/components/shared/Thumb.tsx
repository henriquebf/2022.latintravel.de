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
          <div className="image">
            <Image
              src={getThumb(section, thumb)}
              alt="image"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          {getContent(language, [section, thumb, 'intro', 'title'])}
        </a>
      </Link>
      <style jsx>{`
        .image {
          position: relative;
          width: 100%;
          height: 200px;
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
