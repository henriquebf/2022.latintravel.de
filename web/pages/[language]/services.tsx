import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Content from '@/components/sections/Content';
import Footer from '@/components/sections/Footer';
import { getContent, getParagraphs } from '@/helpers/contentHelper';

type Props = { language: string };

const Services: NextPage<Props> = ({ language }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <main>
        <Intro
          title={getContent(language, ['services', 'intro', 'title'])}
          description={getContent(language, [
            'services',
            'intro',
            'description',
          ])}
          backgroundImage={getContent(language, [
            'services',
            'intro',
            'backgroundImage',
          ])}
        />
        <Content
          images={[]}
          paragraphs={getParagraphs(language, [
            'services',
            'content',
            'paragraphs',
          ])}
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

export default Services;
