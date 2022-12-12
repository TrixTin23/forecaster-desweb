import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Jakarta",
    },
    {
      id: 2,
      title: "Bogor",
    },
    {
      id: 3,
      title: "Depok",
    },
    {
      id: 4,
      title: "Tanggerang",
    },
    {
      id: 5,
      title: "Bekasi",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
