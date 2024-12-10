import React, { useState } from 'react';

interface CarCardProps {
  name: string;
  image: string;
  price: string;
  category: string;
  description: string; // New prop for description
}

const CarCard: React.FC<CarCardProps> = ({ name, image, price, category , description}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate WhatsApp link dynamically
  const whatsappLink = `https://wa.me/628113393008?text=Hallo%20Artha%20Raya%20Transportasi,%20saya%20mau%20booking%20mobil%20${encodeURIComponent(
    name
  )},%20Terima%20Kasih!`;
  
   // Define background colors for categories
   const categoryColors: { [key: string]: string } = {
    MPV: "bg-blue-700",
    SUV: "bg-red-700",
    Luxury: "bg-yellow-700",
    Bus: "bg-green-700",
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full object-contain" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
      <div className="p-4">
         {/* Make car name clickable */}
         <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold uppercase mb-2 block text-black hover:text-blue-600 transition"
        >
          {name}
        </a>
        <p className="text-gray-600 mb-2">{description}</p> {/* Description */}
        {/* Category with background color */}
        <p
          className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${
            categoryColors[category] || "bg-gray-500"
          }`}
        >
          {category}
        </p>
        <p className="text-blue-600 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default CarCard;

