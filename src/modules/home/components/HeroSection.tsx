import illu from '@modules/assets/iyansr.png';
import { Eczar } from '@next/font/google';
import Image from 'next/image';

const eczar = Eczar();

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
            I'm Iyan Saputra, A Frontend Developer
          </h1>
        </div>
        <div className="mt-9 mb-12 hidden justify-center space-x-4 md:mb-0 md:flex md:justify-start">
          <button className="flex items-center space-x-4 rounded-2xl bg-biru-1 px-6 py-4 text-xl font-semibold text-bg-0 transition-transform duration-100 hover:scale-105 md:py-6 md:px-8 md:text-2xl">
            <span>View My Work</span>
            <span>
              <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.793 15.707a1 1 0 0 1 0-1.414L13.086 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l2.716 2.716a1.402 1.402 0 0 1 0 1.982l-2.716 2.716a1 1 0 0 1-1.414 0ZM7.75 2.387C9.05 2.1 10.624 2 12.5 2s3.451.1 4.75.388c1.31.291 2.399.788 3.236 1.626.838.837 1.335 1.926 1.626 3.236.289 1.299.388 2.874.388 4.75s-.1 3.451-.388 4.75c-.291 1.31-.788 2.399-1.626 3.236-.837.838-1.926 1.335-3.236 1.626-1.299.289-2.874.388-4.75.388s-3.451-.1-4.75-.388c-1.31-.291-2.399-.788-3.236-1.626-.838-.837-1.335-1.926-1.626-3.236C2.599 15.45 2.5 13.876 2.5 12s.1-3.451.388-4.75c.291-1.31.788-2.399 1.626-3.236.837-.838 1.926-1.335 3.236-1.626Z"
                  fill="#F3F2FF"
                />
              </svg>
            </span>
          </button>

          <button className=" space-x-4 rounded-2xl border-4 border-biru-2 bg-transparent px-6 py-4 text-center text-2xl font-semibold text-biru-2 transition-transform duration-100  hover:scale-105 md:py-6 md:px-8">
            Contact Me
          </button>
        </div>
      </div>
      <div className="mt-20 flex-1 md:mt-0">
        <Image src={illu} placeholder="blur" alt="Iyan Saputra" className="mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
