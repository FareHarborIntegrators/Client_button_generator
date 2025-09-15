import { useButtonContext } from './ButtonContext';
import { useState } from 'react';
import CopyIcon from './Icons/CopyIcon';

function AdvancedTab({}) {
   const {
    btnText,
    btnLink,
    btnColor,
    btnSize,
    btnShape,
    btnStyle,
    btnIcon,
    btnVisibility,
    setBtnVisibility,
    btnLocation,
  } = useButtonContext();

  let anchorString = `<a href="${btnLink}" class="fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-font--inherit fh-icon--${btnIcon} fh-shape--${btnShape} fh-size--${btnSize} fh-fixed--${btnLocation} ${btnVisibility === 'bothDesktopAndMobile' ? '':`fh-hide--${btnVisibility}`}">${btnText}</a>`;
  let styleString = `<link rel="stylesheet" href="https://fh-kit.com/buttons/v2/?pop=${btnColor}" type="text/css" media="screen" />`
  const h3Stylings = 'block mb-1 text-sm font-medium text-gray-700';
  const radioStyles= 'text-sm peer-checked:bg-fh-blue peer-checked:text-white border border-fh-blue text-fh-blue px-4 py-2 rounded cursor-pointer transition';

  const handleBtnVisibility = (event) => {
    setBtnVisibility(event.target.value);
  } 

  const [copiedAnchor, setCopiedAnchor] = useState(false);
  const [copiedStyle, setCopiedStyle] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'anchor') {
        setCopiedAnchor(true);
        setTimeout(() => setCopiedAnchor(false), 2000);
      } else if (type === 'style') {
        setCopiedStyle(true);
        setTimeout(() => setCopiedStyle(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

    return (
        <div className='flex flex-col h-3/4 justify-start items-start pl-2 pr-2 pt-6'>

            <div className='flex flex-col justify-center items-start mb-4 relative'>
                <h3 className={h3Stylings}>Button HTML Output</h3>
                <code className='text-sm px-10 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg'>
                  {anchorString}
                </code>
                <button onClick={() => handleCopy(anchorString, 'anchor')}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-fh-blue text-white rounded hover:bg-blue-700 transition-all duration-300">
                  {copiedAnchor ? "Copied!" : <CopyIcon/>}
                </button>
            </div>

            <div className='flex flex-col justify-center items-start relative'>
                <h3 className={h3Stylings}>FareHarbor Stylesheet</h3>
                <code className='text-sm px-10 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg'>{styleString}</code>
                <button onClick={() => handleCopy(styleString, 'style')}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-fh-blue text-white rounded hover:bg-blue-700 transition">
                  {copiedStyle ? "Copied!" : <CopyIcon/>}
                </button>
            </div>

            <div className='flex flex-col justify-center items-start mt-4'>
              <h3 className={h3Stylings}>Button Visibility</h3>
              <div className="flex flex-wrap justify-start items-center">
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

export default AdvancedTab