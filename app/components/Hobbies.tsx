"use client";

import { useCallback, useEffect, useState } from "react";

const hobbies = [
  "Football ⚽️",
  "Movies 🍿",
  "Anime 👾",
  "Travelling ✈️",
  "Music 🎶",
  "Reading 📚",
];

const Hobbies = () => {
  const [index, setIndex] = useState(0);

  const shuffle = useCallback(function shuffleFunc() {
    setIndex((prevIndex) => {
      if (prevIndex === hobbies.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <span className="text-6xl lg:text-[128px] lg:leading-[1.2]">
      {hobbies[index]}
    </span>
  );
};

export default Hobbies;
