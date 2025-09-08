import { useButtonContext } from './ButtonContext';

function AppearanceTab({}) {
    const allBtnShapes = ['default', 'round', 'square'];
    const allBtnSizes = ['small', 'default', 'large'];
    const allBtnStyles = ['', '2d', 'true-flat', 'flat', 'outline'];

    const columnDivStyles = 'flex flex-col items-center m-2 p-2 basis-1/4';
    const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
    const buttonDivStyles = 'flex flex-col gap-4 justify-start';

    const {
            btnText,
            btnStyle,
            btnShape,
            btnSize,
            btnIcon,
            setBtnShape,
            setBtnStyle,
            setBtnSize,

          } = useButtonContext();


    return (
        <div className='bg-gray-100 border border-gray-200 rounded-lg flex justify-center items-start p-24 m-6 rounded-lg shadow-xl'>

      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Choose Your Button Shape</h3>
        <div className={buttonDivStyles}>
          {allBtnShapes.map((shape, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-shape--${shape} fh-size--${btnSize} fh-icon--${btnIcon}`} onClick={() => setBtnShape(shape)}>{btnText}</a>
            ))
          }

        </div>
      </div>

      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Choose Your Button Size</h3>
        <div className={buttonDivStyles}>
          {allBtnSizes.map((size, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-shape--${btnShape} fh-size--${size} fh-icon--${btnIcon}`} onClick={() => setBtnSize(size)}>{btnText}</a>
            ))
          }
        </div>
      </div>
      <div className={columnDivStyles}>
        <h3 className={titleStyles}>Choose Your Button Style</h3>
        <div className={buttonDivStyles}>
          {allBtnStyles.map((style, index) => (
            <a key={index} className={`fh-button${style !== '' ? `-${style}` : ``}-pop fh-shape--${btnShape} fh-size--${btnSize} fh-icon--${btnIcon}`} onClick={() => setBtnStyle(style)}>{btnText}</a>
            ))
          }
        </div>
      </div>
    </div>
    )
}

export default AppearanceTab