import { Section } from '@modules/shared/components/Section';
import eczar from '@modules/shared/utils/font';

const Blog = () => {
  return (
    <Section>
      <div className="mt-6">
        <h1
          className={`${eczar.className} mf:text-6xl text-center text-5xl font-semibold leading-tight text-earth-2 md:text-left`}
        >
          I'm Iyan Saputra, A Frontend Developer
        </h1>
      </div>
    </Section>
  );
};

export default Blog;
