import { useButtonContext } from './ButtonContext';

function AppearanceTab({}) {
    const allBtnShapes = ['default', 'round', 'square'];
    const allBtnSizes = ['small', 'default', 'large'];
    const allBtnStyles = ['', '2d', 'true-flat', 'flat', 'outline'];
    const titleStyles= 'flex justify-center text-lg font-bold mt-4 mb-2';
    const buttonDivStyles = 'flex gap-2 justify-center items-center flex-wrap';

    const {
            btnText,
            btnStyle,
            btnShape,
            btnIcon,
            setBtnShape,
            setBtnStyle,
            setBtnSize,

          } = useButtonContext();


    return (
    <div>
        <h3 className={titleStyles}>Button Shape</h3>
        <div className={buttonDivStyles}>
          {allBtnShapes.map((shape, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-shape--${shape} fh-size--small fh-icon--${btnIcon}`} onClick={() => setBtnShape(shape)}>{btnText}</a>
            ))
          }

        </div>


        <h3 className={titleStyles}>Button Size</h3>
        <div className={buttonDivStyles}>
          {allBtnSizes.map((size, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-shape--${btnShape} fh-size--${size} fh-icon--${btnIcon}`} onClick={() => setBtnSize(size)}>{btnText}</a>
            ))
          }
        </div>

        <h3 className={titleStyles}>Button Style</h3>
        <div className={`${buttonDivStyles}`}>
          {allBtnStyles.map((style, index) => (
            <a key={index} className={`fh-button${style !== '' ? `-${style}` : ``}-pop fh-shape--${btnShape} fh-size--small fh-icon--${btnIcon}`} onClick={() => setBtnStyle(style)}>{btnText}</a>
            ))
          }
        </div>
      </div>
    )
}

export default AppearanceTab