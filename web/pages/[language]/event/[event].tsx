import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Container from '@/components/layout/Container';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

type Props = { language: string; event: string };

const Event: NextPage<Props> = ({ language, event }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <meta name="description" content="XXXXXXXX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <Container>
        <main>Event {event}</main>
      </Container>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}): Promise<{ props: any }> => {
  const { language, event } = params
    ? params
    : { language: 'de', event: 'xxx' };
  return { props: { language, event } };
};

export default Event;
