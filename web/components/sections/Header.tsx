import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { classNames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/layout/Container';

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
        <nav id="nav">
          <Link href={`/${language}`}>Home</Link>
          <Link href={`/${language}/about`}>About</Link>
          <Link href={`/${language}/contact`}>Contact</Link>
          <Link href={`/${language}/data-protection`}>Data Protection</Link>
          <Link href={`/${language}/disclaimer`}>Disclaimer</Link>
          <Link href={`/${language}/impressum`}>Impressum</Link>
          <Link href={`/${language}/inquiry`}>Inquiry</Link>
          <Link href={`/${language}/services`}>Services</Link>
          <Link href={`/${language}/experience/xxx`}>Experience - XXX</Link>
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
