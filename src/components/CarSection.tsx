import React, { useState } from "react";
import CarCard from "./CarCard";

const cars = [
  {
    id: 1,
    name: "Innova Reborn",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-13.png",
    price: "Rp. 600.000/hr/tgl",
    category: "MPV",
  },
  {
    id: 2,
    name: "New Avanza",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Screenshot_16.png",
    price: "Rp. 550.000/hr/tgl",
    category: "MPV",
  },
  {
    id: 3,
    name: "New Fortuner",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-5.png",
    price: "Rp. 1.400.000/hr/tgl",
    category: "SUV",
  },
  {
    id: 4,
    name: "New Alphard",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-4.png",
    price: "Rp. 2.500.000/hr/tgl",
    category: "Luxury",
  },
  {
    id: 5,
    name: "New Camry",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-6.png",
    price: "Rp. 1.100.000/hr/tgl",
    category: "Luxury",
  },
  {
    id: 6,
    name: "New Pajero",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-7.png",
    price: "Rp. 1.400.000/hr/tgl",
    category: "SUV",
  },
  {
    id: 7,
    name: "Land Cruiser",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-9.png",
    price: "Rp. 17.000.000/hr/tgl",
    category: "Luxury",
  },
  {
    id: 8,
    name: "Mercy S Class",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2024/10/Mercy-10.png",
    price: "By Request",
    category: "Luxury",
  },
  {
    id: 9,
    name: "Zenix Hybrid",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2023/09/Screenshot_2.png",
    price: "Rp. 900.000/hr/tgl",
    category: "MPV",
  },
  {
    id: 10,
    name: "Zenix Gasoline",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2023/09/Screenshot_3.png",
    price: "Rp. 800.000/hr/tgl",
    category: "MPV",
  },
  {
    id: 11,
    name: "Reborn Facelift",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2023/09/Screenshot_4.png",
    price: "Rp. 700.000/hr/tgl",
    category: "MPV",
  },
  {
    id: 12,
    name: "Hiace Premio Luxury",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-11.png",
    price: "By Request",
    category: "Bus",
  },
  {
    id: 13,
    name: "Venturer",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2023/09/Screenshot_7.png",
    price: "Rp. 1. 200.000/hr/tgl",
    category: "MPV",
  },
  {
    id: 14,
    name: "Hiace Commuter",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-11.png",
    price: "Rp. 1.100.000/hr/tgl",
    category: "Bus",
  },
  {
    id: 15,
    name: "Hiace Premio",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:950/u:https://artharaya-trans.com/wp-content/uploads/2023/08/Rp.-600.000-12.png",
    price: "Rp. 1. 300.000/hr/tgl",
    category: "Bus",
  },
  {
    id: 16,
    name: "Isuzu Long Box",
    image:
      "https://artharayatranscoma4328.zapwp.com/q:i/r:0/wp:1/w:480/u:https://artharaya-trans.com/wp-content/uploads/2024/11/sewa-mobil-box-surabaya.png",
    price: "Ready Isuzu NMR Long Box (CDD 6 Ban) | Kubikasi 27m3 | Siap Melayani Logistik Dan Ekspedisi Area Jawa Timur",
    category: "Bus",
  },
];

const CarSection: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const filteredCars =
    filter === "all"
      ? cars
      : cars.filter((car) => car.category.toLowerCase() === filter);

  return (
    <section id="cars" className="py-16 bg-gray-100 md:px-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-800 hover:text-blue-600 transition-colors duration-300">
            Mobil 
          </span>{" "}
          <span className="text-black hover:text-gray-700 transition-colors duration-300">
            Andalan Kami
          </span>
        </h2>
        <div className="w-full overflow-x-auto mb-8">
  <div className="flex justify-start items-center space-x-4 px-4 snap-x snap-mandatory">
    <button
      onClick={() => setFilter("all")}
      className={`snap-start flex-shrink-0 px-4 py-2 rounded-full ${
        filter === "all"
          ? "bg-blue-600 text-white"
          : "bg-white text-blue-600"
      }`}
    >
      All
    </button>
    <button
      onClick={() => setFilter("mpv")}
      className={`snap-start flex-shrink-0 px-4 py-2 rounded-full ${
        filter === "mpv"
          ? "bg-blue-600 text-white"
          : "bg-white text-blue-600"
      }`}
    >
      MPV
    </button>
    <button
      onClick={() => setFilter("suv")}
      className={`snap-start flex-shrink-0 px-4 py-2 rounded-full ${
        filter === "suv"
          ? "bg-blue-600 text-white"
          : "bg-white text-blue-600"
      }`}
    >
      SUV
    </button>
    <button
      onClick={() => setFilter("luxury")}
      className={`snap-start flex-shrink-0 px-4 py-2 rounded-full ${
        filter === "luxury"
          ? "bg-blue-600 text-white"
          : "bg-white text-blue-600"
      }`}
    >
      Luxury
    </button>
    <button
      onClick={() => setFilter("bus")}
      className={`snap-start flex-shrink-0 px-4 py-2 rounded-full ${
        filter === "bus"
          ? "bg-blue-600 text-white"
          : "bg-white text-blue-600"
      }`}
    >
      Bus
    </button>
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              name={car.name}
              image={car.image}
              price={car.price}
              category={car.category}
              description={`Rental Mobil ${car.name} Surabaya Plus Driver`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarSection;
