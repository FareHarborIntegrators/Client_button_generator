import { useButtonContext } from './ButtonContext';
import { useState } from 'react';
import CopyIcon from './Icons/CopyIcon';
import QuestionIcon from './Icons/QuestionIcon';

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
    btnLocation,
  } = useButtonContext();

  let anchorString = `<a href="${btnLink}" class="fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-font--inherit fh-icon--${btnIcon} fh-shape--${btnShape} fh-size--${btnSize} ${btnLocation === '' ? '' : `fh-fixed--${btnLocation}`} ${btnVisibility === 'bothDesktopAndMobile' ? '':`fh-hide--${btnVisibility}`}">${btnText}</a>`;
  let styleString = `<link rel="stylesheet" href="https://fh-kit.com/buttons/v2/?pop=${btnColor}" type="text/css" media="screen" />`
  const APIString = `<script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"></script>`;
  const h3Stylings = 'block mb-1 text-sm font-medium text-gray-700';

  const [copiedAnchor, setCopiedAnchor] = useState(false);
  const [copiedStyle, setCopiedStyle] = useState(false);
  const [copiedAPI, setCopiedAPI] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'anchor') {
        setCopiedAnchor(true);
        setTimeout(() => setCopiedAnchor(false), 2000);
      } else if (type === 'style') {
        setCopiedStyle(true);
        setTimeout(() => setCopiedStyle(false), 2000);
      } else if (type === 'api') {
        setCopiedAPI(true);
        setTimeout(() => setCopiedAPI(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

    return (
        <div className='flex flex-col justify-start items-start pl-2 pr-2 pt-6'>

          <div className='flex w-full flex-col justify-center items-start relative mb-4'>
                <div className='flex items-center'>
                  <h3 className={h3Stylings}>FareHarbor Stylesheet <span className='text-gray-600'>&#40;append to end of the &lt;/header&gt; tag&#41;</span></h3>
                </div>
                <code className='overflow-auto text-sm w-full pl-4 pr-10 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg'>{styleString}</code>
                <button onClick={() => handleCopy(styleString, 'style')}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-fh-blue text-white rounded hover:bg-blue-700 transition">
                  {copiedStyle ? "Copied!" : <CopyIcon/>}
                </button>
            </div>

            <div className='flex w-full flex-col justify-center items-start relative mb-4'>
                <h3 className={h3Stylings}>FareHarbor API <span className='text-gray-600'>&#40;append to end of the &lt;/body&gt; tag&#41;</span></h3>
                <code className='overflow-auto text-sm w-full pl-4 pr-10 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg'>{APIString}</code>
                <button onClick={() => handleCopy(APIString, 'api')}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-fh-blue text-white rounded hover:bg-blue-700 transition">
                  {copiedAPI ? "Copied!" : <CopyIcon/>}
                </button>
            </div>

            <div className='flex w-full flex-col justify-center items-start mb-4 relative'>
                <h3 className={h3Stylings}>Button HTML <span className='text-gray-600'>&#40;append to end of the &lt;/body&gt; tag&#41;</span></h3>
                <code className='overflow-auto text-sm w-full pl-4 pr-10 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg'>
                  {anchorString}
                </code>
                <button onClick={() => handleCopy(anchorString, 'anchor')}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-fh-blue text-white rounded hover:bg-blue-700 transition-all duration-300">
                  {copiedAnchor ? "Copied!" : <CopyIcon/>}
                </button>
            </div>

         </div>
    )
}

export default AdvancedTab