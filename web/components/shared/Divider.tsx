import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import sizes from '@/config/sizes.json';
import { getContent, getThumb } from '@/helpers/contentHelper';

type Props = {};

const Divider: NextPage<Props> = () => {
  return (
    <div className="divider">
      <style jsx>{`
        .divider {
          height: 65px;
        }
      `}</style>
    </div>
  );
};

export default Divider;
