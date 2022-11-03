import illu from '@modules/assets/iyansr.png';
import { Eczar } from '@next/font/google';
import Image from 'next/image';

const eczar = Eczar();

const Section1 = () => {
  return (
    <section className="mx-auto mt-12 flex max-h-screen max-w-6xl items-center px-4">
      <div className="flex-1">
        <div className="inline-block rounded-md bg-bg-4 px-6 py-3 font-semibold">
          <span role="img">👋</span>
          Hello All
        </div>
        <div className="mt-6">
          <h1 className={`${eczar.className} text-6xl font-semibold text-earth-2`}>
            I'm Iyan Saputra, A Frontend Developer
          </h1>
        </div>
      </div>
      <div className="flex-1">
        <Image src={illu} placeholder="blur" alt="Iyan Saputra" className="mx-auto" />
      </div>
    </section>
  );
};

export default Section1;
