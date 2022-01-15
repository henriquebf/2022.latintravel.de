import type { NextPage } from 'next';
import Container from '@/components/layout/Container';
import styles from '@/styles/Layout.module.css';

type Props = { title: string; description: string; backgroundImage: string };

const Intro: NextPage<Props> = () => {
  return (
    <footer className={styles.section}>
      <Container>Intro</Container>
    </footer>
  );
};

export default Intro;
