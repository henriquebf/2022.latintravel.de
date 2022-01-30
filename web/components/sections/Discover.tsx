import type { NextPage } from 'next';
import Container from '@/components/layout/Container';
import Thumb from '@/components/shared/Thumb';

type Props = {
  language: string;
  section: string;
  headline: string;
  text: string;
  thumbs: string[];
};

const Content: NextPage<Props> = ({
  section,
  language,
  headline,
  text,
  thumbs,
}) => {
  return (
    <section id={`#${section}`}>
      <Container>
        <h3>{headline}</h3>
        <p>{text}</p>
        <div className="thumbs">
          {thumbs.map((t, _i) => (
            <Thumb key={_i} language={language} section={section} thumb={t} />
          ))}
        </div>
      </Container>
      <style jsx>{`
        section {
        }

        .thumbs {
        }
      `}</style>
    </section>
  );
};

export default Content;
