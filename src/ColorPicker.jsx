import { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [previewColor, setPreviewColor] = useState(`#${color}`);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setPreviewColor(newColor.hex);
    const hexWithoutHash = newColor.hex.replace('#', '');
    setColor(hexWithoutHash);
  };

  const styles = {
    color: {
      width: '20px',
      height: '20px',
      margin: '1px',
      borderRadius: '100%',
      background: previewColor, // HEX string
    },
    swatch: {
      padding: '3px',
      background: '#ffffffff',
      borderRadius: '100%',
      boxShadow: '0px 3px 8px 3px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    },
    popover: {
      position: 'absolute',
      zIndex: '2',
      right: '0px',
    },
    cover: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  };

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker && (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;