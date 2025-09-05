import { useState, useEffect } from 'react'
import ButtonDemoCard from './buttonDemoCard';
import InputCard from './inputCard'
import OutputCard from './outputCard';
import TitleBar from './titleBar';
import './App.css'

function App() {
  const [btnText, setText] = useState('Book Now');
  const [btnLink, setBtnLink] = useState('BOOKING LINK');
  const [btnIcon, setIcon] = useState('calendar-check');
  const [btnShape, setBtnShape] = useState('default');
  const [btnSize, setBtnSize] = useState('default');
  const [btnStyle, setBtnStyle] = useState('2d');
  const [btnColor, setBtnColor] = useState('0a79e9');
  const [btnLocation, setBtnLocation] = useState('');
  const [btnVisibility, setBtnVisibility] = useState('bothDesktopAndMobile');
  const [isLeft, setIsLeft] = useState(false);

  const changeText = (choice) => {
    setText(choice);
  }

  const changeLink = (choice) => {
    setBtnLink(choice);
  }

  const changeIcon = (choice) => {
    setIcon(choice);
  }
  const changeBtnShape = (choice) => {
    setBtnShape(choice);
  }
  const changeBtnSize = (choice) => {
    setBtnSize(choice);
  }
  const changeBtnStyle = (choice) => {
    setBtnStyle(choice);
  }
  const changeColor = (choice) => {
    setBtnColor(choice);
  }
  const changeBtnLocation = (choice) => {
    setBtnLocation(choice);
  }
  const changeBtnVisibility = (choice) => {
    setBtnVisibility(choice);
  }
  const changeIsLeft = () => {
    setIsLeft(!isLeft);
  }
  
  // Update or insert stylesheet when color changes
  useEffect(() => {
    const id = 'dynamic-fh-style';
    let existingLink = document.getElementById(id);

    const href = `https://fh-kit.com/buttons/v2/?pop=${btnColor}`;

    if (existingLink) {
      existingLink.href = href;
    } else {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.media = 'screen';
      link.id = id;
      link.href = href;
      document.head.appendChild(link);
    }
  }, [btnColor]);

  return (
    <div className='flex flex-col bg-[#111827] p-10'>
      <TitleBar />
      <div className='flex'>
        <InputCard 
          btnText={btnText} setText={changeText}
          btnLink={btnLink} setBtnLink={changeLink}
          btnIcon={btnIcon} setIcon={changeIcon}
          btnShape={btnShape} setBtnShape={changeBtnShape}
          btnSize={btnSize} setBtnSize={changeBtnSize} 
          btnStyle={btnStyle} setBtnStyle={changeBtnStyle}
          btnLocation={btnLocation} setBtnLocation={changeBtnLocation}
          btnVisibility={btnVisibility} setBtnVisibility={changeBtnVisibility}
          isLeft={isLeft} setIsLeft={changeIsLeft}
          btnColor={btnColor} setBtnColor={changeColor}
          />
        <OutputCard 
          btnText={btnText}
          btnLink={btnLink}
          btnIcon={btnIcon}
          btnShape={btnShape}
          btnSize={btnSize}
          btnStyle={btnStyle}
          btnColor={btnColor}
          btnLocation={btnLocation}
          btnVisibility={btnVisibility}
          isLeft={isLeft}
          />

      </div>
        <ButtonDemoCard 
          btnText={btnText}
          btnIcon={btnIcon} setIcon={changeIcon}
          btnShape={btnShape} setBtnShape={changeBtnShape}
          btnSize={btnSize} setBtnSize={changeBtnSize} 
          btnStyle={btnStyle} setBtnStyle={changeBtnStyle}
          btnColor={btnColor} setColor={changeColor}
          /> 
      </div>
  )
}

export default App
