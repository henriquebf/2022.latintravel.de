import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Container from '@/components/layout/Container';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

type Props = { language: string };

const Services: NextPage<Props> = ({ language }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <meta name="description" content="XXXXXXXX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <Container>
        <main>Services</main>
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

export default Services;
