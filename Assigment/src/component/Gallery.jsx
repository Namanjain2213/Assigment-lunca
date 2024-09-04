import { useState } from 'react';
import image from '../assets/image2.png';
import vector from '../assets/Vector.png';
import Frame from '../assets/Frame.png';
import './gallery.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Gallery = () => {
  const [images, setImages] = useState([image, image, image]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = reader.result;
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
      
      if (newIndex === 0) {
        const leftButton = document.querySelector('.left-img');
        leftButton.style.background = 'linear-gradient(180deg, #3A4E68 0%, #5A7A9D 100%)';
        leftButton.querySelector('svg').style.color = 'white';
      }
      if (prevIndex === images.length - 3) {
        const rightButton = document.querySelector('.right-img');
        rightButton.style.background = ''; 
        rightButton.querySelector('svg').style.color = 'gray'; 
      }

      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < images.length - 3 ? prevIndex + 1 : prevIndex;
      
      if (newIndex === images.length - 3) {
        const rightButton = document.querySelector('.right-img');
        rightButton.style.background = 'linear-gradient(180deg, #3A4E68 0%, #5A7A9D 100%)';
        rightButton.querySelector('svg').style.color = 'white';
      }

      if (prevIndex === 0) {
        const leftButton = document.querySelector('.left-img');
        leftButton.style.background = ''; 
        leftButton.querySelector('svg').style.color = 'gray'; 
      }

      return newIndex;
    });
  };

  return (
    <div className="main-div flex items-center flex-col bg-[#363C43] text-white rounded-[18.89px] p-4 max-w-[780px] w-[90%] mt-5 md:h-[316px] mx-auto relative">
      <div className='w-[24px] h-[159.69px] mt-4 left-[10px] flex flex-col absolute justify-between'>
        <img src={vector} alt="" />
        <img src={Frame} alt="" />
      </div>
      <div className="flex w-[100%] justify-between items-center mb-4">
        <h2 className="flex justify-center text-[20px] items-center shadow-lg bg-black w-[149px] h-[62px] rounded-[20px] left-[15px] ml-20" style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.6)' }}>Gallery</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => document.getElementById('file-input').click()}
            className="w-[131.32px] h-[46px] mr-1 rounded-[104px] bg-[#363C43] combined-shadow"
          >
            + ADD IMAGE
          </button>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={addImage}
            accept="image/*"
          />
          <div className='flex justify-center items-center'>
            <button
              onClick={handlePrevClick}
              className="bg-[#6F787C] text-2xl left-img your-class items-center ml-10 flex p-2 rounded-full hover w-[45px] h-[45px]"
              disabled={currentIndex === 0}
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button
              onClick={handleNextClick}
              className="bg-[#6F787C] text-2xl right-img your-class items-center ml-4 flex p-2 rounded-full w-[45px] h-[45px]"
              disabled={currentIndex >= images.length - 3}
            >
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-3 space-x-4">
        <div className="flex space-x-3">
          {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery Image ${currentIndex + index + 1}`}
              className="w-[190px] h-[190px] rounded-lg object-cover hover:shadow-2xl shadow-black hover:grayscale-0 grayscale hover:-rotate-2 hover:scale-110 transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
