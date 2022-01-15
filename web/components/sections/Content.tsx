import type { NextPage } from 'next';
import Container from '@/components/layout/Container';
import styles from '@/styles/Layout.module.css';

type Props = { images: string[]; text: string };

const Content: NextPage<Props> = () => {
  return (
    <footer className={styles.section}>
      <Container>Content</Container>
    </footer>
  );
};

export default Content;
