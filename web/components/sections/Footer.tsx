import type { NextPage } from 'next';
import Link from 'next/link';
import Container from '@/components/layout/Container';

type Props = { language: string };

const About: NextPage<Props> = ({ language }) => {
  return (
    <footer>
      <Container>
        <nav>
          <Link href={`/${language}`}>Home</Link>
          <Link href={`/${language}/about`}>About</Link>
          <Link href={`/${language}/contact`}>Contact</Link>
          <Link href={`/${language}/data-protection`}>Data Protection</Link>
          <Link href={`/${language}/disclaimer`}>Disclaimer</Link>
          <Link href={`/${language}/impressum`}>Impressum</Link>
          <Link href={`/${language}/services`}>Services</Link>
          <Link href={`/${language}/event/business`}>business</Link>
          <Link href={`/${language}/event/carnival`}>carnival</Link>
          <Link href={`/${language}/experience/abrolhos`}>abrolhos</Link>
          <Link href={`/${language}/experience/fernando-de-noronha`}>
            fernando-de-noronha
          </Link>
          <Link href={`/${language}/experience/foz-do-iguacu`}>
            foz-do-iguacu
          </Link>
          <Link href={`/${language}/experience/ilha-grande`}>ilha-grande</Link>
          <Link href={`/${language}/experience/jericoacoara`}>
            jericoacoara
          </Link>
          <Link href={`/${language}/experience/lencois`}>lencois</Link>
          <Link href={`/${language}/experience/manaus`}>manaus</Link>
          <Link href={`/${language}/experience/pantanal`}>pantanal</Link>
          <Link href={`/${language}/experience/rio-de-janeiro`}>
            rio-de-janeiro
          </Link>
          <Link href={`/${language}/experience/salvador`}>salvador</Link>
        </nav>
      </Container>
      <style jsx>{`
        footer {
        }
      `}</style>
    </footer>
  );
};

export default About;
