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
  }

  return (
    <div className={`relative flex justify-center items-center w-full min-h-48 max-h-48 h-48 md:min-h-full md:max-h-full md:h-full border border-gray-200 rounded-lg basis-1/3 ml-4 mr-4 pt-12 pb-12`}
        style={outputStyle}>
        <div className='absolute top-0 right-0 p-2 m-2'>
          {/* <div className='block mb-1 text-xs font-medium text-gray-700'>Background color:</div> */}
          <ColorPicker color={outputCardBGColor} setColor={setOutputCardBGColor}/>
        </div>
        <a className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop ${!isLeft ? `fh-fixed--${btnLocation}` : ''} fh-font--inherit fh-shape--${btnShape} fh-size--${btnSize}  fh-icon--${btnIcon} ${btnVisibility === 'bothDesktopAndMobile' ? '':`fh-hide--${btnVisibility}`}`}>{btnText}</a>
    </div>
  )
}

export default OutputCard