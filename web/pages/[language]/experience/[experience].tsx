import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Container from '@/components/layout/Container';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

type Props = { language: string; experience: string };

const Experience: NextPage<Props> = ({ language, experience }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <meta name="description" content="XXXXXXXX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <Container>
        <main>Experience {experience}</main>
      </Container>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}): Promise<{ props: any }> => {
  const { language, experience } = params
    ? params
    : { language: 'de', experience: 'xxx' };
  return { props: { language, experience } };
};

export default Experience;
