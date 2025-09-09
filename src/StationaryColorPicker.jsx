import { useState } from 'react';
import { ChromePicker } from 'react-color';

const StationaryColorPicker = ({ color, setColor }) => {
  const [previewColor, setPreviewColor] = useState(`#${color}`);

  const handleChange = (newColor) => {
    setPreviewColor(newColor.hex);
    const hexWithoutHash = newColor.hex.replace('#', '');
    setColor(hexWithoutHash);
  };


  return (
    
        <ChromePicker color={color} onChange={handleChange} />

  );
};

export default StationaryColorPicker;