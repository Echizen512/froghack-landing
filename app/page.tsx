'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MatrixRain from '@/components/matrix-rain';
import Image from 'next/image';
export default function FrogHackLanding() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [glitchText, setGlitchText] = useState('FROGHACK');

  const characters = [
    {
      name: 'FrogPhantom',
      skill: 'Node Infiltration',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      name: 'FrogRoot',
      skill: 'Signal Disruption',
      color: 'from-yellow-500 to-orange-400',
    },
    {
      name: 'FrogBit',
      skill: 'Code Decryption',
      color: 'from-green-500 to-emerald-400',
    },
    {
      name: 'FrogGrammer',
      skill: 'Virus Installation',
      color: 'from-red-500 to-pink-400',
    },
  ];

  const gameModes = [
    { name: 'FROGOPS', description: 'Forge your Digital Legacy' },
    { name: 'FROGFORGE', description: 'Create, Upgrade, Dominate' },
    { name: 'HACK RUSH', description: 'Inflitrate, Exploit, Escape' },
  ];

  const accessories = [
    {
      name: 'Masks',
      description: 'Identity-shifting visors for stealth and style.',
    },
    {
      name: 'Capes',
      description: 'Reactive cloaks that shimmer with movement.',
    },
    {
      name: 'Boots',
      description: 'High-tech soles built for speed and silence.',
    },
  ];

const [isDressed, setIsDressed] = useState(false);


const floatingAccessories = [
  { name: 'Mask', image: '/Mask2.png', top: '10%', left: '75%' },    
  { name: 'Cape', image: '/Capes.png', top: '10%', left: '-15%' },   
  { name: 'Boots', image: '/Boots.png', top: '80%', left: '-15%' },  
  { name: 'Cell', image: '/Cell.png', top: '70%', left: '75%' },   
  { name: 'Pants', image: '/Pants.png', top: '40%', left: '80%' }, 
];


  const handleDressUp = () => {
    setIsDressed(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharacter((prev) => (prev + 1) % characters.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      let glitched = '';
      for (let i = 0; i < 'FROGHACK'.length; i++) {
        if (Math.random() < 0.1) {
          glitched +=
            glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += 'FROGHACK'[i];
        }
      }
      setGlitchText(glitched);
      setTimeout(() => setGlitchText('FROGHACK'), 100);
    }, 2000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className='min-h-screen bg-black text-green-400 overflow-hidden relative'>
      <MatrixRain />

      {/* Hero Section */}
      <section className='relative z-10 min-h-screen flex items-center justify-center px-4'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='mb-4'>
            <Image
              src='/Logo.png'
              alt='FrogHack Logo'
              className='mx-auto w-32 h-32 animate-pulse'
              width={50}
              height={50}
              style={{
                imageRendering: 'pixelated',
              }}
            />
          </div>

          <div className='mb-8 animate-pulse'>
            <h1 className='text-6xl md:text-8xl font-bold text-white mb-2 tracking-[0.5px]'>
              FROG<span className='text-green-400'>HACK</span>
            </h1>
          </div>

          <div className='mb-8 p-6 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed'>
              FrogHack is next-gen gaming: P2E and idle merged into one ecosystem. On the FrogChain, frogs reign with power and mystery.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='bg-gradient-to-r from-green-500 to-green-800 text-white font-bold text-xl px-8 py-4 hover:scale-105 transition-transform animate-pulse'>
              Coming Soon...
            </Button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className='relative z-10 py-2 px-4 mb-12'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
            FRO<span className='text-green-400'>GGER</span>
          </h2>
          <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed text-center'>
              Four specialists. One deadly mission. Masters of infiltration, signal sabotage, decryption, and viral warfare—they're FrogHack’s most feared unit. And they're ready to strike.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {characters.map((char, index) => (
              <Card
                key={char.name}
                className={`bg-black/80 border-2 transition-all duration-500 hover:scale-105 cursor-pointer rounded-xl ${index === currentCharacter
                  ? `border-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse`
                  : 'border-green-400 hover:border-cyan-400'
                  }`}
              >
                <CardContent className='p-6 text-center'>
                  <div className='mb-4 relative overflow-hidden rounded-xl'>
                    <Image
                      src={
                        char.name === 'FrogPhantom'
                          ? '/phantomll.png'
                          : char.name === 'FrogRoot'
                            ? '/frogroott.png'
                            : char.name === 'FrogBit'
                              ? '/frogbit.png'
                              : char.name === 'FrogGrammer'
                                ? '/FrogGrammer.png'
                                : `/abstract-geometric-shapes.png?key=b6fpl&height=200&width=200&query=${char.name} frog hacker character cyberpunk style`
                      }
                      alt={char.name}
                      style={{
                        imageRendering: 'pixelated',
                      }}
                      width={30}
                      height={30}
                      className='w-full h-48 object-fill border-2 border-green-400 rounded-xl hover:border-cyan-400'
                    />
                  </div>
                  <h3 className='text-2xl font-bold mb-2 text-green-400'>
                    {char.name}
                  </h3>
                  <div
                    className={`text-lg font-bold mb-3 bg-gradient-to-r ${char.color} bg-clip-text text-transparent`}
                  >
                    {char.skill}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className='relative z-10 py-2 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
          ACCE<span className='text-green-400'>SSORIES</span>
        </h2>
        <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
          <p className='text-xl md:text-2xl leading-relaxed text-center'>
            Each Frogger wields a custom arsenal—dark-piercing visors, viral cores that disrupt entire networks. Their gear is the line between failure and the perfect hack.
          </p>
        </div>

        {/* Grid de accesorios */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {accessories.map((item) => (
            <Card
              key={item.name}
              className='bg-black/80 border-2 border-green-400 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl'
            >
              <CardContent className='p-6 text-center'>
                <div className='mb-4 relative overflow-hidden rounded-xl'>
                  <Image
                    src={
                      item.name === 'Masks'
                        ? '/Masks.png'
                        : item.name === 'Capes'
                          ? '/Capes.png'
                          : item.name === 'Boots'
                            ? '/Boots.png'
                            : `/abstract-geometric-shapes.png?key=7wl17&height=200&width=200&query=${item.name} frog accessory cyberpunk style`
                    }
                    alt={item.name}
                    width={30}
                    height={30}
                    className='w-full h-32 object-fill border-2 border-green-400 rounded-xl hover:border-cyan-400 transition-colors'
                  />
                </div>
                <h3 className='text-xl font-bold mb-3 text-green-400'>
                  {item.name}
                </h3>
                <p className='text-green-300'>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

       <>
      {/* Mini juego de vestir */}
      <div className='mt-16 p-6 bg-black/60 border border-green-400 rounded-xl text-center'>
        <h3 className='text-3xl font-bold text-green-400 mb-4'>Dress Your Frog</h3>
        <p className='text-green-300 mb-6'>
          Choose your gear. Watch your frog transform in real time.
        </p>

        {/* Rana base */}
        <div className='relative w-64 h-64 mx-auto mb-6'>
          {!isDressed ? (
            <>
              <Image
                src='/base.png'
                alt='Base Frog'
                fill
                className='object-contain z-0'
              />

              {/* Accesorios flotantes */}
              {floatingAccessories.map((acc) => (
                <Image
                  key={acc.name}
                  src={acc.image}
                  alt={acc.name}
                  width={100}
                  height={100}
                  className='absolute animate-float transition-opacity duration-500'
                  style={{
                    top: acc.top,
                    left: acc.left,
                  }}
                />
              ))}
            </>
          ) : (
            <Image
              src='/frog-equipped.png'
              alt='Equipped Frog'
              fill
              className='object-contain z-10'
            />
          )}
        </div>

        {/* Botones */}
        {!isDressed ? (
          <button
            onClick={handleDressUp}
            className='px-6 py-2 bg-green-400 text-black font-bold rounded hover:bg-cyan-400 transition-colors'
          >
            Equip Accessories
          </button>
        ) : (
          <button
            onClick={() => setIsDressed(false)}
            className='px-6 py-2 bg-cyan-400 text-black font-bold rounded hover:bg-green-400 transition-colors'
          >
            Unequip Accessories
          </button>
        )}
      </div>
    </>
    </div>
    </section>


      {/* Houses Section */}
      <section className='relative z-10 py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-tight'>
            FROG<span className='text-green-400'> HOUSES</span>
          </h2>
          <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed text-center'>
              There are 4 unique houses. Each Frog WorkHouse arms Froggers with the tools to unleash their skills. After every FrogChain Ops mission, they rest before striking again.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <Card className='bg-black/80 border-2 border-blue-400 hover:shadow-lg hover:shadow-blue-400/50 transition-all rounded-xl'>
              <CardContent className='p-8'>
                <div className='mb-6 relative overflow-hidden rounded-xl'>
                  <Image
                    src='/Inflitration.gif'
                    alt='House 1 - Node Infiltration'
                    className='w-full h-48 object-fill border-2 border-blue-400 rounded-xl'
                    loading='lazy'
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className='text-2xl font-bold mb-4 text-blue-400'>
                  Node Infiltration
                </h3>
                <p className='text-blue-400 text-justify'>
                  A hidden enclave where work is done to access protected
                  systems. Here, FrogPhantom makes the most of their silent
                  infiltration tools.
                </p>
              </CardContent>
            </Card>

            <Card className='bg-black/80 border-2 border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/50 transition-all rounded-xl'>
              <CardContent className='p-8'>
                <div className='mb-6 relative overflow-hidden rounded-xl'>
                  <Image
                    src='/Disruption.gif'
                    alt='House 2 - Signal Disruption'
                    className='w-full h-48 object-fill border-2 border-yellow-400 rounded-xl'
                    loading='lazy'
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className='text-2xl font-bold mb-4 text-yellow-400'>
                  Signal Disruption
                </h3>
                <p className='text-yellow-400'>
                  A secret space where techniques to disable communications are
                  perfected. FrogRoot masters network sabotage here.
                </p>
              </CardContent>
            </Card>

            <Card className='bg-black/80 border-2 border-green-400 hover:shadow-lg hover:shadow-green-400/50 transition-all rounded-xl'>
              <CardContent className='p-8'>
                <div className='mb-6 relative overflow-hidden rounded-xl'>
                  <Image
                    src='/Code.gif'
                    alt='House 3 - Code Decryption'
                    className='w-full h-48 object-fill border-2 border-green-400 rounded-xl'
                    loading='lazy'
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className='text-2xl font-bold mb-4 text-green-400'>
                  Code Decryption
                </h3>
                <p className='text-green-400 text-justify'>
                  An enigmatic center dedicated to deciphering complex
                  encryptions. FrogBit deploys all its relentless logic here.
                </p>
              </CardContent>
            </Card>

            <Card className='bg-black/80 border-2 border-red-400 hover:shadow-lg hover:shadow-red-400/50 transition-all rounded-xl'>
              <CardContent className='p-8'>
                <div className='mb-6 relative overflow-hidden rounded-xl'>
                  <Image
                    src='/Virus.gif'
                    alt='House 4 - Virus Installation'
                    className='w-full h-48 object-fill border-2 border-red-400 rounded-xl'
                    loading='lazy'
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className='text-2xl font-bold mb-4 text-red-400'>
                  Virus Installation
                </h3>
                <p className='text-red-400 text-justify'>
                  A clandestine lab where liquidity-draining viruses are
                  created. FrogGrammer exploits their malware skills here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className='relative z-10 py-2 px-4 mb-12'>
        <div className='max-w-6xl mx-auto mb-12'>
          <h2 className='text-6xl md:text-8xl font-bold text-center mb-4 text-white tracking-[0.5px]'>
            GAME<span className='text-green-400'> MODES</span>
          </h2>
          <div className='mb-8 p-4 border border-green-400 bg-black/50 backdrop-blur-sm animate-pulse rounded-xl'>
            <p className='text-xl md:text-2xl leading-relaxed text-center'>
              Three game modes are hopping into FrogHacks—stay tuned to uncover what’s coming.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {gameModes.map((mode, index) => (
              <Card
                key={mode.name}
                className='bg-black/80 border-2 border-green-400 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl'
              >
                <CardContent className='p-6 text-center'>
                  <div className='mb-4 relative overflow-hidden rounded-xl'>
                    <Image
                      src={
                        mode.name === 'FROGOPS'
                          ? '/frogopsfin.png'
                          : mode.name === 'FROGFORGE'
                            ? '/frogforge.png'
                            : mode.name === 'HACK RUSH'
                              ? '/hackrushfi.png'
                              : `/abstract-geometric-shapes.png?key=7wl17&height=200&width=200&query=${mode.name} gaming mode cyberpunk frog hacker interface`
                      }
                      alt={mode.name}
                      width={30}
                      height={30}
                      className='w-full h-32 object-cover border-2 border-green-400 rounded-xl hover:border-cyan-400 transition-colors'
                    />
                  </div>
                  <h3 className='text-xl font-bold mb-3 text-green-400'>
                    {mode.name}
                  </h3>
                  <p className='text-green-300'>{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative z-10 py-8 px-4 border-t border-green-400'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='text-2xl font-bold mb-4 text-green-400'>FROGHACK</div>
          <p className='text-green-400 font-mono'>
            &copy; 2025 FrogHack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
