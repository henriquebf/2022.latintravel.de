import type { NextPage } from 'next';
import Link from 'next/link';
import { getContent } from '@/helpers/contentHelper';

type Props = { language: string; section: string; thumb: string };

const Thumb: NextPage<Props> = ({ language, section, thumb }) => {
  return (
    <div className="thumb">
      <Link href={`/${language}/${section}/${thumb}`}>
        {getContent(language, [section, thumb, 'intro', 'title'])}
      </Link>
      <style jsx>{`
        .thumb {
        }
      `}</style>
    </div>
  );
};

export default Thumb;
