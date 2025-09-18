import { useState } from 'react';
import { useButtonContext } from './ButtonContext';
import ColorPicker from './ColorPicker';
import AdvancedIcon from "./Icons/AdvancedIcon";
import CodeOutputModal from './CodeOutputModal';

function OutputCard({ isLeft }) {

   const {
    btnText,
    btnSize,
    btnShape,
    btnStyle,
    btnIcon,
    btnVisibility,
    btnLocation,
    btnActive,
    btnLink,
  } = useButtonContext(); 

  const [outputCardBGColor, setOutputCardBGColor] = useState('ffffff');
  const outputStyle = {
    backgroundColor: `#${outputCardBGColor}`,
    border: '4px solid #ffffffff',
    boxShadow: '0px 3px 8px 3px rgba(0,0,0,.1)',
  }

  const handleButtonClick = (e) => {
    if (!btnActive) {
      e.preventDefault(); // Prevent the link from navigating
    }
  };

  return (
    <div className={`flex flex-col justify-start items-center w-full min-h-48 max-h-48 h-48 md:min-h-96 md:max-h-96 md:h-full bg-gray-300 border border-gray-200 rounded-lg basis-1/3 ml-4 mr-4 p-2`}>
        <div className='flex justify-between items-center w-full pl-2 pr-2 mb-1 rounded-md bg-gray-300'>
          <CodeOutputModal />
          <div className='flex justify-end items-center'>
            <span className='block mb-1 pl-1 text-xs font-xs text-gray-700 pr-2'>Background Color: </span>
            <ColorPicker color={outputCardBGColor} setColor={setOutputCardBGColor}/>
          </div>
        </div>
        <div className='rounded-xl flex flex-col justify-center items-center w-full h-full'
              style={outputStyle}>
          <a href={btnActive ? btnLink : '' } onClick={handleButtonClick} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop ${!isLeft ? `fh-fixed--${btnLocation}` : ''} fh-font--inherit fh-shape--${btnShape} fh-size--${btnSize}  fh-icon--${btnIcon} ${btnVisibility === 'bothDesktopAndMobile' ? '':`fh-hide--${btnVisibility}`}`}>{btnText}</a>
        </div>
    </div>
  )
}

export default OutputCard