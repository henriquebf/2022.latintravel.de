import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import zIndexes from '@/config/zIndexes.json';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/layout/Container';
import { getContent } from '@/helpers/contentHelper';
import { classNames } from '@/helpers/classnameHelper';

type Props = { language: string };

const Header: NextPage<Props> = ({ language }) => {
  const scrollPosition = useScrollPosition();

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollPosition, setShowHeader]);

  return (
    <header id="header" className={classNames([showHeader ? 'show' : 'hide'])}>
      <Container>
        <nav>
          <Link href={`/${language}`}>Logo</Link>
          <Link href={`/${language}/#experiences`}>
            {getContent(language, ['global', 'experiences'])}
          </Link>
          <Link href={`/${language}/#events`}>
            {getContent(language, ['global', 'events'])}
          </Link>
          <Link href={`/${language}/services`}>
            {getContent(language, ['global', 'services'])}
          </Link>
          <Link href={`/${language}/contact`}>
            {getContent(language, ['global', 'contact'])}
          </Link>
          <Link href={`/de`}>Deutsch</Link>
          <Link href={`/pt`}>Português</Link>
        </nav>
      </Container>
      <style jsx>{`
        header {
          width: 100%;
          height: 65px;
          z-index: ${zIndexes.header};
          opacity: 1;
          transition: opacity 0.25s;
          text-transform: uppercase;
          color: ${colors.light.text_primary_color};
          background-color: ${colors.light.bg_primary_color};
        }

        @media (min-width: ${sizes.container}) {
          #header {
            display: block;
            position: fixed;
          }

          #header.hide {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
