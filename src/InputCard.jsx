import { useState } from "react";
import ColorPicker from "./ColorPicker";
import { useButtonContext } from './ButtonContext';

function InputCard({ setBtnLink, btnStyle, btnLocation, setBtnLocation, btnVisibility, setBtnVisibility, isLeft, setIsLeft, setBtnStyle, btnColor, setBtnColor} ) {

  let inputStyles = 'border-gray-300 border-solid border-2 m-2 pl-1';
  const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
  const radioStyles= 'peer-checked:bg-blue-600 peer-checked:text-white border border-blue-600 text-blue-600 px-4 py-2 rounded cursor-pointer transition';
  const h3Stylings = 'text-lg font-bold mb-1'
  const {
    setBtnText,
  } = useButtonContext();

  const handleBtnTxtInput = (textInput) => {
    setBtnText(textInput.target.value);
  }
  const handleBtnLinkInput = (linkInput) => {
    setBtnLink(linkInput.target.value);
  }

  const handleColorInput = (colorInput) => {
    setBtnColor(colorInput.target.value);
  }

  const handleBtnStyleInput = (event) => {
    setBtnStyle(event.target.value);
  };

  const handleBtnLocationInput = (event) => {
    setBtnLocation(event.target.value);
  }

    const handleBtnVisibility = (event) => {
    setBtnVisibility(event.target.value);
  } 


  return (
    <div className='bg-gray-100 border border-gray-200 rounded-lg flex flex-col justify-start items-center w-full p-6 m-6 rounded-lg shadow-xl'>
      
      <h1 className={titleStyles}>Input</h1>
      
      <div className="flex justify-around items-center mb-3">
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Enter Your Button Text</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleBtnTxtInput(e)} placeholder='Book Now'/>
        </div>
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Enter Your Button Link</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleBtnLinkInput(e)} placeholder='Booking Link'/>
        </div>
      </div>
      
      <div className='flex justify-around items-center mb-3'>
        <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Choose Your Button Color</h3>
          <div className="flex justify-center items-center">
            <ColorPicker color={btnColor} setColor={setBtnColor} />
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default InputCard