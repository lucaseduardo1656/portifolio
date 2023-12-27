"use client";
import React, { useEffect, useState } from "react";

const BackgroundImage = () => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImageList = async () => {
    try {
      const response = await fetch("/images/imageList.json");
      const data = await response.json();
      setImageList(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar a lista de imagens:", error);
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  };

  return (
    <div
      className="bg-cover bg-center w-full h-screen transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${getRandomImage()})`,
        opacity: loading ? 0.0 : 1,
      }}
    />
  );
};

export default BackgroundImage;
