import { useEffect } from 'react'
import { ButtonProvider } from './ButtonContext';
import InputCard from './inputCard'
import OutputCard from './outputCard';
import TitleBar from './titleBar';
import './App.css'

function DynamicStyleSheetLoader() {
  const { btnColor } = useButtonContext(); // Get color from context

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

  return null; // This component only manages side effects
}

function App() {
  return (
    <ButtonProvider>
      <div className='flex flex-col bg-[#FFFFFF] p-10'>
        <TitleBar />
        <div className='flex'>
          <InputCard/>
          <OutputCard/>
        </div> 
      </div>
    </ButtonProvider>
  )
}

export default App
