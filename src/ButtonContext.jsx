import React, { createContext, useContext, useState } from 'react';

const ButtonContext = createContext();

export const useButtonContext = () => useContext(ButtonContext);

export const ButtonProvider = ({ children }) => {
  const [btnText, setBtnText] = useState('Book Now');
  const [btnLink, setBtnLink] = useState('BOOKING LINK');
  const [btnIcon, setBtnIcon] = useState('calendar-check');
  const [btnShape, setBtnShape] = useState('default');
  const [btnSize, setBtnSize] = useState('default');
  const [btnStyle, setBtnStyle] = useState('2d');
  const [btnColor, setBtnColor] = useState('0a79e9'); // hex (without #)
  const [btnLocation, setBtnLocation] = useState('');
  const [btnVisibility, setBtnVisibility] = useState('bothDesktopAndMobile');

  const value = {
    btnText, setBtnText,
    btnLink, setBtnLink,
    btnIcon, setBtnIcon,
    btnShape, setBtnShape,
    btnSize, setBtnSize,
    btnStyle, setBtnStyle,
    btnColor, setBtnColor,
    btnLocation, setBtnLocation,
    btnVisibility, setBtnVisibility
  };

  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};