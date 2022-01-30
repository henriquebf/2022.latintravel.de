import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { classNames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/layout/Container';
import { getContent } from '@/helpers/contentHelper';

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
        }
      `}</style>
    </header>
  );
};

export default Header;
