import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Content from '@/components/sections/Content';
import Footer from '@/components/sections/Footer';
import { getContent } from '@/helpers/contentHelper';
import { getParagraphs } from '@/helpers/contentHelper';

type Props = { language: string; event: string };

const Event: NextPage<Props> = ({ language, event }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <meta
          name="description"
          content={getContent(language, [
            'events',
            event,
            'intro',
            'description',
          ])}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <Intro
        title={getContent(language, ['events', event, 'intro', 'title'])}
        description={getContent(language, [
          'events',
          event,
          'intro',
          'description',
        ])}
        backgroundImage={getContent(language, [
          'events',
          event,
          'intro',
          'backgroundImage',
        ])}
      />
      <Content
        images={[]}
        paragraphs={getParagraphs(language, [
          'events',
          event,
          'content',
          'paragraphs',
        ])}
      />
      <Footer language={language} />
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
