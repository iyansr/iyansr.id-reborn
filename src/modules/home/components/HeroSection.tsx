import Image from 'next/image';

import illu from '@modules/assets/iyansr.png';
import eczar from '@modules/shared/utils/font';

const HeroSection = () => {
  return (
    <section className="mx-auto mt-12 flex max-w-6xl flex-col items-center px-4 md:flex-row">
      <div className="flex flex-1 flex-col items-center md:items-start">
        <div className="inline-block rounded-md bg-bg-4 px-6 py-3 font-semibold">
          <span role="img">👋</span>
          Hello All
        </div>
        <div className="mt-6">
          <h1
            className={`${eczar.className} mf:text-6xl text-center text-5xl font-semibold leading-tight text-earth-2 md:text-left`}
          >
            {"I'm"} Iyan Saputra, A Frontend Developer
          </h1>
        </div>
      </div>
      <div className="mt-20 flex-1 md:mt-0">
        <Image
          src={illu}
          placeholder="blur"
          alt="Iyan Saputra"
          className="mx-auto object-cover"
          width={400}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
