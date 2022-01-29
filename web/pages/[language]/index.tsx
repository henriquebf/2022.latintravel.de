import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Container from '@/components/layout/Container';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
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
      <Container>
        <main className={styles.main}>Home</main>
      </Container>
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