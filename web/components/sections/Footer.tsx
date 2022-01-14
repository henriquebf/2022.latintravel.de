import type { NextPage } from 'next';
import Container from '@/components/layout/Container';
import styles from '@/styles/Layout.module.css';

type Props = {};

const About: NextPage<Props> = () => {
  return (
    <footer className={styles.footer}>
      <Container>footer</Container>
    </footer>
  );
};

export default About;
