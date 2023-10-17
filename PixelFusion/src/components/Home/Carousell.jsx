import React from "react";
import { Carousel } from "@material-tailwind/react";

const Carousell = () => {
  return (
    <div className="bg-gray-100 rounded-2xl mb-5">
      <Carousel
      className="shadow-xl rounded-2xl shadow-purple-50"    
        loop={true}
        autoplay={true}
        autoplayDelay={3555} // Move autoplayDelay here to control the delay for the entire carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer transition-all ${
                  activeIndex === i ? "w-8 bg-white rounded-full " : "w-4 bg-white/50 rounded-full"
                }`}
                onClick={() => setActiveIndex(i)} 
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="image 1"
          className="h-full w-full object-cover" 
        />
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRlY2glMjBndXl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="image 2"
          className="h-full w-full object-cover" 
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1682140918600-6e31c25ad2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="image 3"
          className="h-full w-full object-cover" 
        />
      </Carousel>
    </div>
  );
};

export default Carousell;

