import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";


const images = [
  "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imagesIndex) =>{
    setCurrentIndex(imagesIndex)
  } 
  return (
    <div id="carousel" className="inline w-11/12 space-y-[-10px]">
      <div className=" flex m-auto items-center bg-[url('https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80')] md:bg-fixed justify-center h-screen">
      <button onClick={prevImage} className="mr-4 h-max">
        <div className="">
          {" "}
          <AiOutlineLeft
            className="fill-white hover:scale-150 duration-500 "
            size={30}
            onClick={prevSlide}
          />
        </div>
      </button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-96 object-cover rounded-lg duration-500"
      />
      <button onClick={nextImage} className="ml-4">
        <div className="">
          {" "}
          <AiOutlineRight
            className="fill-white hover:scale-150 duration-500"
            size={30}
            onClick={nextSlide}
          />
        </div>
      </button>
      
      </div>
      <div  className="flex top-4 justify-center py-2 cursor-pointer"> 
      {images.map((images,imagesIndex)=>
      <div key={imagesIndex} onClick={() => goToSlide(imagesIndex)} className="text-2xl cursor-pointer"><RxDotFilled/></div>
      )}
      </div>
    </div>
  );
};

export default Carousel;
