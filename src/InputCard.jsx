import { useState } from "react";
import ColorPicker from "./ColorPicker";
import { useButtonContext } from './ButtonContext';

function InputCard({ setBtnLink, btnStyle, btnLocation, setBtnLocation, btnVisibility, setBtnVisibility, isLeft, setIsLeft, setBtnStyle, btnColor, setBtnColor} ) {

  let inputStyles = 'border-gray-300 border-solid border-2 m-2 pl-1';
  const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
  const radioStyles= 'peer-checked:bg-blue-600 peer-checked:text-white border border-blue-600 text-blue-600 px-4 py-2 rounded cursor-pointer transition';
  const h3Stylings = 'text-lg font-bold mb-1'
  const {
    setText,
  } = useButtonContext();
  
  const handleBtnTxtInput = (textInput) => {
    setText(textInput.target.value);
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

      <div className='flex flex-col justify-center items-center'>
        <h3 className={h3Stylings}>Button Location</h3>
        <div className="flex flex-wrap justify-center items-center">
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="standard-button" type="radio" value='' className="peer hidden" checked={btnLocation === ''} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="standard-button" className={radioStyles}>Standard Button (No Float)</label>
          </div>
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="top" type="radio" value="top" className="peer hidden" checked={btnLocation === 'top'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="top" className={radioStyles}>Top</label>
          </div>
          {/* <div className="mx-1 my-3">
            <input name="fixedLocation" id="top-left" type="radio" value="top-left" className="peer hidden" checked={btnLocation === 'top-left'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="top-left" className={radioStyles}>Top Left</label>
          </div> */}
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="bottom" type="radio" value="bottom" className="peer hidden" checked={btnLocation === 'bottom'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="bottom" className={radioStyles}>Bottom</label>
          </div>
          {/* <div className="mx-1 my-3">
            <input name="fixedLocation" id="bottom-left" type="radio" value="bottom-left" className="peer hidden" checked={btnLocation === 'bottom-left'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="bottom-left" className={radioStyles}>Bottom Left</label>
          </div> */}
          <div className="mx-1 my-3">
            <input name="fixedLocation" id="side" type="radio" value="side" className="peer hidden" checked={btnLocation === 'side'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="side" className={radioStyles}>Side</label>
          </div>
          {/* <div className="mx-1 my-3">
            <input name="fixedLocation" id="side-left" type="radio" value="side-left" className="peer hidden" checked={btnLocation === 'side-left'} onChange={(e) => handleBtnLocationInput(e)}/>
            <label htmlFor="side-left" className={radioStyles}>Side Left</label>
          </div> */}
        </div>
        {/* <div className="m-2 p-2">
          <input type="checkbox" name="bias-left" id="bias-left" checked={isLeft} onChange={() => setIsLeft()}/>
          <label className="pl-2" htmlFor="bias-left">Bias Left</label>
        </div> */}
      </div>


      <div className='flex flex-col justify-center items-center'>
        <h3 className={h3Stylings}>Button Visibility</h3>
        <div className="flex flex-wrap justify-center items-center">
          <div className="mx-1 my-3">
            <input name="btnVisibility" id="bothDesktopAndMobile" type="radio" value="bothDesktopAndMobile" className="peer hidden" checked={btnVisibility === 'bothDesktopAndMobile'} onChange={(e) => handleBtnVisibility(e)}/>
            <label htmlFor="bothDesktopAndMobile" className={radioStyles}>Desktop & Mobile</label>
          </div>
          <div className="mx-1 my-3">
            <input name="btnVisibility" id="desktopOnly" type="radio" value="mobile" className="peer hidden" checked={btnVisibility === 'mobile'} onChange={(e) => handleBtnVisibility(e)}/>
            <label htmlFor="desktopOnly" className={radioStyles}>Desktop Only</label>
          </div>
          <div className="mx-1 my-3">
            <input name="btnVisibility" id="mobileOnly" type="radio" value="desktop" className="peer hidden" checked={btnVisibility === 'desktop'} onChange={(e) => handleBtnVisibility(e)}/>
            <label htmlFor="mobileOnly" className={radioStyles}>Mobile Only</label>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default InputCard