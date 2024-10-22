import { useState, useEffect } from "react";

const BgImage = ({ bgImage }) => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateBackgroundPosition = () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      setBackgroundPosition({ x, y });
    };

    updateBackgroundPosition();
    const interval = setInterval(updateBackgroundPosition, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute w-full h-full bg-cover opacity-30 duration-1000 -z-10"
      style={{
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
      }}
    ></div>
  );
};

export default BgImage;
