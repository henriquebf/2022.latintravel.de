import type { NextPage } from 'next';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { getContent, getParagraphs } from '@/helpers/contentHelper';

type Props = { language: string };

const About: NextPage<Props> = ({ language }) => {
  return (
    <footer>
      <Container>
        <nav>
          <div>
            <h5>{getContent(language, ['global', 'experiences'])}</h5>
            <ul>
              <li>
                <Link href={`/${language}/experience/lencois`}>
                  {getContent(language, [
                    'experiences',
                    'lencois',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/ilha-grande`}>
                  {getContent(language, [
                    'experiences',
                    'ilha-grande',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/foz-do-iguacu`}>
                  {getContent(language, [
                    'experiences',
                    'foz-do-iguacu',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/fernando-de-noronha`}>
                  {getContent(language, [
                    'experiences',
                    'fernando-de-noronha',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/abrolhos`}>
                  {getContent(language, [
                    'experiences',
                    'abrolhos',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/jericoacoara`}>
                  {getContent(language, [
                    'experiences',
                    'jericoacoara',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/manaus`}>
                  {getContent(language, [
                    'experiences',
                    'manaus',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/salvador`}>
                  {getContent(language, [
                    'experiences',
                    'salvador',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/rio-de-janeiro`}>
                  {getContent(language, [
                    'experiences',
                    'rio-de-janeiro',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/experience/pantanal`}>
                  {getContent(language, [
                    'experiences',
                    'pantanal',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>{getContent(language, ['global', 'events'])}</h5>
            <ul>
              <li>
                <Link href={`/${language}/event/carnival`}>
                  {getContent(language, [
                    'events',
                    'carnival',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/event/business`}>
                  {getContent(language, [
                    'events',
                    'business',
                    'intro',
                    'title',
                  ])}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Latin Travel Express</h5>
            <ul>
              <li>
                <Link href={`/${language}/about`}>
                  {getContent(language, ['global', 'about'])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/services`}>
                  {getContent(language, ['global', 'services'])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/disclaimer`}>
                  {getContent(language, ['global', 'disclaimer'])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/data-protection`}>
                  {getContent(language, ['global', 'data-protection'])}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/impressum`}>
                  {getContent(language, ['global', 'impressum'])}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>{getContent(language, ['global', 'contact'])}</h5>
            <ul>
              {getParagraphs(language, [
                'contact',
                'content',
                'paragraphs',
              ]).map((p, _i) => (
                <li key={_i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </ul>
          </div>
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
