import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getContent, getThumb } from '@/helpers/contentHelper';

type Props = { language: string; section: string; thumb: string };

const Thumb: NextPage<Props> = ({ language, section, thumb }) => {
  return (
    <div className="thumb">
      <Link href={`/${language}/${section}/${thumb}`} passHref>
        <div>
          <div className="image">
            <Image
              src={getThumb(section, thumb)}
              alt="image"
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          {getContent(language, [section, thumb, 'intro', 'title'])}
        </div>
      </Link>
      <style jsx>{`
        .image {
          position: relative;
          width: 100%;
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default Thumb;
