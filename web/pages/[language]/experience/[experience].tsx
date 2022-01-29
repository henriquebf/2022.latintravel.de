import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Content from '@/components/sections/Content';
import Footer from '@/components/sections/Footer';
import { getContent, getParagraphs, getImages } from '@/helpers/contentHelper';

type Props = { language: string; experience: string };

const Experience: NextPage<Props> = ({ language, experience }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <meta
          name="description"
          content={getContent(language, [
            'experiences',
            experience,
            'intro',
            'description',
          ])}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <Intro
        title={getContent(language, [
          'experiences',
          experience,
          'intro',
          'title',
        ])}
        description={getContent(language, [
          'experiences',
          experience,
          'intro',
          'description',
        ])}
        backgroundImage={getContent(language, [
          'experiences',
          experience,
          'intro',
          'backgroundImage',
        ])}
      />
      <Content
        images={getImages(['experiences', experience, 'content', 'images'])}
        paragraphs={getParagraphs(language, [
          'experiences',
          experience,
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
  const { language, experience } = params
    ? params
    : { language: 'de', experience: 'xxx' };
  return { props: { language, experience } };
};

export default Experience;
