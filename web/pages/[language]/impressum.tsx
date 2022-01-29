import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/sections/Header';
import Content from '@/components/sections/Content';
import Footer from '@/components/sections/Footer';
import { getParagraphs } from '@/helpers/contentHelper';

type Props = { language: string };

const Impressum: NextPage<Props> = ({ language }) => {
  return (
    <div>
      <Head>
        <title>Latin Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} />
      <main>
        <Content
          images={[]}
          paragraphs={getParagraphs(language, [
            'impressum',
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

export default Impressum;
