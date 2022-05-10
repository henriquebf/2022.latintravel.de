import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const [activateHeader, setActivateHeader] = useState(true);

  useEffect(() => {
    if (scrollPosition > 0) {
      setActivateHeader(true);
    } else {
      setActivateHeader(false);
    }
  }, [scrollPosition, setActivateHeader]);

  return (
    <header
      id="header"
      className={classNames([activateHeader ? 'active' : 'start'])}
    >
      <Container>
        <nav>
          <div className="left">
            <span>
              <Link href={`/${language}#experiences`} scroll={false}>
                {getContent(language, ['global', 'experiences'])}
              </Link>
            </span>
            <span>
              <Link href={`/${language}#events`} scroll={false}>
                {getContent(language, ['global', 'events'])}
              </Link>
            </span>
            <span>
              <Link href={`/${language}/services`}>
                {getContent(language, ['global', 'services'])}
              </Link>
            </span>
          </div>
          <div className="center">
            <span>
              <Link href={`/${language}`} passHref>
                <a>
                  <Image
                    src="/logo-globe.png"
                    width="52"
                    height="40"
                    alt="logo"
                  />
                </a>
              </Link>
            </span>
          </div>
          <div className="right">
            <span>
              <Link href={`/${language}/contact`}>
                {getContent(language, ['global', 'contact'])}
              </Link>
            </span>
            <span>
              <Link href={`/de`}>Deutsch</Link>
              <Link href={`/pt`}>Português</Link>
            </span>
          </div>
        </nav>
      </Container>
      <style jsx>{`
        header {
          width: 100%;
          height: 65px;
          line-height: 65px;
          z-index: ${zIndexes.header};
          position: fixed;
          text-transform: uppercase;
          font-weight: 400;
          transition: background-color 0.25s;
          color: ${colors.light.text_primary_color};
          background-color: ${colors.light.bg_header_start_color};
        }

        nav {
          height: 65px;
          display: grid;
        }

        .left {
          display: none;
        }

        .left > span {
          margin-right: 20px;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .center > span {
          height: 40px;
        }

        .right {
          display: none;
        }

        .right > span {
          margin-left: 20px;
        }

        @media (min-width: ${sizes.container}) {
          #header.active {
            background-color: ${colors.light.bg_header_active_color};
          }

          nav {
            display: grid;
            grid-template-columns: 40% 20% 40%;
          }

          .left {
            display: block;
          }

          .right {
            display: flex;
            justify-content: flex-end;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
