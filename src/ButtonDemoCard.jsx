import React from 'react'

function ButtonDemoCard({btnText, btnLink, btnIcon, setIcon, btnShape, setBtnShape, btnSize,setBtnSize, btnStyle, setBtnStyle, colorQuery, btnColor, btnLocation}) {

  const allBtnIcons = ['cal', 'gift', 'map', 'check', 'arrow', 'ticket', 'check-bubble', 'dollar', 'clock', 'user', 'users', 'lock', 'phone', 'camera', 'beer', 'anchor', 'ship', 'location', 'caret-right', 'cutlery', 'bus', 'taxi', 'shopping-cart', 'life-ring', 'bed', 'check-square', 'calendar-check'];
  const allBtnShapes = ['default', 'round', 'square'];
  const allBtnSizes = ['small', 'default', 'large'];
  const allBtnStyles = ['', '2d', 'true-flat', 'flat', 'outline'];

  const columnDivStyles = 'flex flex-col items-center m-2 p-2 basis-1/4';
  const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
  const buttonDivStyles = 'flex flex-col gap-4 justify-start';

  return (
    <div className='bg-[#1F2837] border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white flex justify-center items-start p-24 m-6 rounded-lg shadow-xl'>
      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Select You Button Icon Here</h3>
        <div className='grid grid-cols-3 w-full justify-between gap-2 items-center'>
          {allBtnIcons.map((icon, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-${colorQuery} fh-shape--${btnShape} fh-size--default fh-icon--${icon}`} onClick={() => setIcon(icon)}></a>
            ))
          }
        </div>
      </div>

      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Choose Your Button Shape</h3>
        <div className={buttonDivStyles}>
          {allBtnShapes.map((shape, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-${colorQuery} fh-shape--${shape} fh-size--${btnSize} fh-icon--${btnIcon}`} onClick={() => setBtnShape(shape)}>{btnText}</a>
            ))
          }

        </div>
      </div>

      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Choose Your Button Size</h3>
        <div className={buttonDivStyles}>
          {allBtnSizes.map((size, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-${colorQuery} fh-shape--${btnShape} fh-size--${size} fh-icon--${btnIcon}`} onClick={() => setBtnSize(size)}>{btnText}</a>
            ))
          }
        </div>
      </div>
      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Choose Your Button Style</h3>
        <div className={buttonDivStyles}>
          {allBtnStyles.map((style, index) => (
            <a key={index} className={`fh-button${style !== '' ? `-${style}` : ``}-${colorQuery} fh-shape--${btnShape} fh-size--${btnSize} fh-icon--${btnIcon}`} onClick={() => setBtnStyle(style)}>{btnText}</a>
            ))
          }
        </div>
      </div>
    </div>
  )}

export default ButtonDemoCard