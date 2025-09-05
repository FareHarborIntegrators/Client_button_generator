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
      width: '120px',
      height: '20px',
      margin: '2px',
      borderRadius: '2px',
      background: previewColor, // HEX string
    },
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    },
    popover: {
      position: 'absolute',
      zIndex: '2',
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