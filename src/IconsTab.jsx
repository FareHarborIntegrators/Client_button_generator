import { useButtonContext } from './ButtonContext';

function IconsTab({}) {
    const allBtnIcons = ['cal', 'gift', 'map', 'check', 'arrow', 'ticket', 'check-bubble', 'dollar', 'clock', 'user', 'users', 'lock', 'phone', 'camera', 'beer', 'anchor', 'ship', 'location', 'caret-right', 'cutlery', 'bus', 'taxi', 'shopping-cart', 'life-ring', 'bed', 'check-square', 'calendar-check'];
    const titleStyles= 'block mb-1 text-sm font-medium text-gray-700';
    const {
            btnStyle,
            btnShape,
            setBtnIcon,
          } = useButtonContext();


    return (
      <div className='flex flex-col h-3/4 justify-start items-start pl-2 pr-2 pt-6 mb-4'>
        <h3 className={titleStyles}>Select a Button Icon</h3>
        <div className='flex flex-wrap w-full justify-start gap-2 items-start'>
          {allBtnIcons.map((icon, index) => (
            <a key={index} className={`fh-button${btnStyle !== '' ? `-${btnStyle}` : ``}-pop fh-shape--${btnShape} fh-size--small fh-icon--${icon}`} onClick={() => setBtnIcon(icon)}></a>
            ))
          }
        </div>
      </div>
    )
}

export default IconsTab