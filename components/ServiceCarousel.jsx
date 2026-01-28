import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ServiceCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden rounded-xl bg-gray-200">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={images[current]}
          alt={`Service image ${current + 1}`}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-red-600' : 'bg-white/70'} border border-gray-300`}
          />
        ))}
      </div>
    </div>
  );
}
