import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Discover from '@/components/sections/Discover';
import Footer from '@/components/sections/Footer';
import { getContent } from '@/helpers/contentHelper';

type Props = { language: string };

const Home: NextPage<Props> = ({ language }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <meta
          name="description"
          content={getContent(language, ['home', 'intro', 'description'])}
        />
        <meta property="og:title" content="Latin Travel Express" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <main>
        <Intro
          title={getContent(language, ['home', 'intro', 'title'])}
          description={getContent(language, ['home', 'intro', 'description'])}
          backgroundImage={getContent(language, [
            'home',
            'intro',
            'backgroundImage',
          ])}
        ></Intro>
        <Discover
          headline={getContent(language, ['home', 'experiences', 'title'])}
          text={getContent(language, ['home', 'experiences', 'description'])}
        />
        <Discover
          headline={getContent(language, ['home', 'events', 'title'])}
          text={getContent(language, ['home', 'events', 'description'])}
        />
      </main>
      <Footer language={language} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}): Promise<{ props: any }> => {
  const { language } = params ? params : { language: 'de' };
  return { props: { language } };
};

export default Home;
