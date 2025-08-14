import { useState } from 'react';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent } from './ui/card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//constants
const characters = [
  {
    name: 'FrogPhantom',
    skill: 'Node Infiltration',
    color: 'from-blue-500 to-cyan-400',
    imagePath: '/phantomll.png',
  },
  {
    name: 'FrogRoot',
    skill: 'Signal Disruption',
    color: 'from-yellow-500 to-orange-400',
    imagePath: '/frogroott.png',
  },
  {
    name: 'FrogBit',
    skill: 'Code Decryption',
    color: 'from-green-500 to-emerald-400',
    imagePath: '/frogbit.png',
  },
  {
    name: 'FrogGrammer',
    skill: 'Virus Installation',
    color: 'from-red-500 to-pink-400',
    imagePath: '/FrogGrammer.png',
  },
] as const;

export const CharacterSection: React.FC = () => {
  //states
  const [currentCharacterID, setCurrentCharacterID] = useState<number>(0);

  return (
    <section className='flex flex-col mx-auto p-2 md:p-6 lg:p-8 mb-12 max-w-6xl'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
          FRO<span className='text-green-400'>GGER</span>
        </h2>
        <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
          <p className='text-xl md:text-2xl leading-relaxed text-center'>
            Four specialists. One deadly mission. Masters of infiltration,
            signal sabotage, decryption, and viral warfare—they're FrogHack’s
            most feared unit. And they're ready to strike.
          </p>
        </div>
      </div>

      <article className='flex flex-col md:flex-row h-[300px] md:gap-5 relative justify-center'>
        <Card
          className={`bg-black/80 border-2 flex-1 transition-all duration-500 rounded-xl ${
            currentCharacterID === 2 || currentCharacterID == 0
              ? `border-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse`
              : 'border-green-400 hover:border-cyan-400'
          }`}
        >
          <CardContent className='p-6 h-full flex justify-center items-center flex-col'>
            <div className='mb-4 relative overflow-hidden rounded-xl' />
            <h3 className='text-2xl font-bold mb-2 text-green-400'>
              {characters[currentCharacterID].name}
            </h3>
            <div
              className={`text-lg font-bold mb-3 bg-gradient-to-r ${characters[currentCharacterID].color} bg-clip-text text-transparent`}
            >
              {characters[currentCharacterID].skill}
            </div>
          </CardContent>
        </Card>

        <Swiper
          className='flex-1'
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const i = swiper.realIndex;
            setCurrentCharacterID(i);
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
        >
          {characters.map((char) => (
            <SwiperSlide>
              <div className='flex justify-center items-center w-full h-56'>
                <Image
                  src={char.imagePath}
                  alt={char.name}
                  fill={true}
                  className='object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>

      {/* swiper override stlyes */}
      <style jsx global>{`
        :root {
          --swiper-navigation-color: #05df72 !important;
          --swiper-theme-color: #05df72 !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #05df72;
        }
      `}</style>
    </section>
  );
};
