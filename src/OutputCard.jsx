import { useButtonContext } from './ButtonContext';

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

  return (
    <div className='flex justify-center items-center w-full h-full bg-white border border-gray-200 rounded-lg basis-1/3 ml-4 mr-4 pt-12 pb-12'>
        <a className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop ${!isLeft ? `fh-fixed--${btnLocation}` : ''} fh-font--inherit fh-shape--${btnShape} fh-size--${btnSize}  fh-icon--${btnIcon} ${btnVisibility === 'bothDesktopAndMobile' ? '':`fh-hide--${btnVisibility}`}`}>{btnText}</a>
    </div>
  )
}

export default OutputCard