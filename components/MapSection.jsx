export default function MapSection({ location = "bekasi" }) {
  const maps = {
    bekasi: {
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.123!2d106.97375!3d-6.27711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMzcuNiJTIDEwNsKwNTgnMjUuNSJF!5e0!3m2!1sen!2sid!4v1234567890",
      link: "https://www.google.com/maps/place/-6.277113,106.973754",
      address: "Bekasi, West Java"
    },
    pontianak: {
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.656!2d109.395515!3d-0.033523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDInMDAuNyJTIDEwOcKwMjMnNDMuOSJF!5e0!3m2!1sen!2sid!4v1234567890",
      link: "https://www.google.com/maps/place/-0.033523,109.395515",
      address: "Pontianak, West Kalimantan"
    }
  };

  const currentMap = maps[location];

  return (
    <div className="relative w-full h-full">
      {/* Google Maps Embed */}
      <iframe 
        src={currentMap.embed}
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
      {/* Open in Maps Button */}
      <a
        href={currentMap.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-sm font-medium"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        Open in Maps
      </a>
    </div>
  );
}