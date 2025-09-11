import { useState } from 'react';
import { useButtonContext } from './ButtonContext';
import ColorPicker from './ColorPicker';

function OutputCard({ isLeft }) {

   const {
    btnText,
    btnSize,
    btnShape,
    btnStyle,
    btnIcon,
    btnVisibility,
    btnLocation,
  } = useButtonContext(); 

  const [outputCardBGColor, setOutputCardBGColor] = useState('ffffff');
  const outputStyle = {
    backgroundColor: `#${outputCardBGColor}`,
    border: '4px solid #ffffffff',
    boxShadow: '0px 3px 8px 3px rgba(0,0,0,.1)',
  }

  return (
    <div className={`flex flex-col justify-start items-center w-full min-h-48 max-h-48 h-48 md:min-h-96 md:max-h-96 md:h-full bg-gray-300 border border-gray-200 rounded-lg basis-1/3 ml-4 mr-4 p-2`}>
        <div className='flex justify-end items-center w-full pl-2 pr-2 mb-1 rounded-md bg-gray-300'>
          {/* <div className='block mb-1 text-xs font-medium text-gray-700'>Background color:</div> */}
          <ColorPicker color={outputCardBGColor} setColor={setOutputCardBGColor}/>
        </div>
        <div className='rounded-xl flex flex-col justify-center items-center w-full h-full'
              style={outputStyle}>
          <a className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop ${!isLeft ? `fh-fixed--${btnLocation}` : ''} fh-font--inherit fh-shape--${btnShape} fh-size--${btnSize}  fh-icon--${btnIcon} ${btnVisibility === 'bothDesktopAndMobile' ? '':`fh-hide--${btnVisibility}`}`}>{btnText}</a>
        </div>
    </div>
  )
}

export default OutputCard