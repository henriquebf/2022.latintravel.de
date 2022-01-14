import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

const Home: NextPage = () => {
  return <div />;
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
}): Promise<{ redirect: any; props: any }> => {
  const defaultLanguage = 'de';

  return {
    redirect: {
      permanent: false,
      destination: `/${defaultLanguage}`,
    },
    props: { language: defaultLanguage },
  };
};

export default Home;
