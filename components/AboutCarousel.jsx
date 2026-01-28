import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
  '/materi/PMJ-AREA-76.jpg',
  '/materi/PMJ-AREA-80.jpg',
  '/materi/PMJ-AREA-105.jpg',
  '/materi/PMJ-AREA-75.jpg',
  '/materi/PMJ-AREA-134.jpg',
  '/materi/PMJ-AREA-115.jpg',
];

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 30);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-4rem)] lg:max-w-[calc(1200px*2+3rem)] mx-auto mb-8 h-[540px] rounded-xl overflow-hidden">
      <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg bg-gray-200">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-300 ${idx === current ? (fade ? 'opacity-0' : 'opacity-100') : 'opacity-0'} bg-white`}
            style={{ zIndex: idx === current ? 2 : 1 }}
          >
            <Image
              src={src}
              alt={`About Section ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2400px"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
            {/* White fade overlay */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${fade ? 'opacity-80' : 'opacity-0'} bg-white`} />
          </div>
        ))}
      </div>
    </div>
  );
}