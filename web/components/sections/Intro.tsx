import type { NextPage } from 'next';
import Container from '@/components/layout/Container';
import styles from '@/styles/Layout.module.css';

type Props = { title: string; description: string; backgroundImage: string };

const Intro: NextPage<Props> = ({ title, description }) => {
  return (
    <footer className={styles.section}>
      <Container>
        <div>{title}</div>
        <div>{description}</div>
      </Container>
    </footer>
  );
};

export default Intro;
