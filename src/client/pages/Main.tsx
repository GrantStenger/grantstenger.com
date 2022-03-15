import React from "react";
import { Footer } from "../components/Footer";
import { useAppContext } from "../Context";

const Main = () => {
  const { name, setName } = useAppContext();
  return (
    <div className="flex bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 items-center flex-col justify-between h-screen">
      <div></div>
      <div className="flex items-center justify-center flex-col align-middle">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-eb-garamond">PRINCIPIA</h1>
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-eb-garamond">CRYPTOGRAPHICA</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
