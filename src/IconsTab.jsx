import { useButtonContext } from './ButtonContext';

function IconsTab({}) {
    const allBtnIcons = ['cal', 'gift', 'map', 'check', 'arrow', 'ticket', 'check-bubble', 'dollar', 'clock', 'user', 'users', 'lock', 'phone', 'camera', 'beer', 'anchor', 'ship', 'location', 'caret-right', 'cutlery', 'bus', 'taxi', 'shopping-cart', 'life-ring', 'bed', 'check-square', 'calendar-check'];
    const columnDivStyles = 'flex flex-col items-center m-2 p-2 basis-1/4';
    const titleStyles= 'flex justify-center text-2xl ml-5 mr-5 mb-10';
    const {
            btnStyle,
            btnShape,
            setBtnIcon,
          } = useButtonContext();


    return (
        <div className={columnDivStyles}>
        <h3 className={titleStyles}>Select a Button Icon</h3>
        <div className='flex flex-wrap w-full justify-center gap-2 items-center'>
          {allBtnIcons.map((icon, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-shape--${btnShape} fh-size--small fh-icon--${icon}`} onClick={() => setBtnIcon(icon)}></a>
            ))
          }
        </div>
      </div>
    )
}

export default IconsTab