import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Footer from '@/components/sections/Footer';
import { getContent } from '@/helpers/contentHelper';
import styles from '@/styles/Layout.module.css';

type Props = { language: string };

const Home: NextPage<Props> = ({ language }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Latin Travel</title>
        <meta name="description" content="XXXXXXXX" />
        <meta property="og:title" content="Latin Travel Express" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <main className={styles.main}>
        <Intro
          title={getContent(language, ['home', 'intro', 'title'])}
          description={getContent(language, ['home', 'intro', 'description'])}
          backgroundImage={getContent(language, [
            'home',
            'intro',
            'backgroundImage',
          ])}
        ></Intro>
      </main>
      <Footer />
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
