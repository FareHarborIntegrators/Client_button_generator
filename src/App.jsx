import { ButtonProvider } from './ButtonContext';
import InputCard from './InputCard'
import OutputCard from './OutputCard';
import TitleBar from './TitleBar';
// import Footer from './Footer';
import DynamicStyleSheetLoader from './Hooks/DynamicStyleSheetLoader';
import './App.css'

function App() {
  return (
    <ButtonProvider>
      <DynamicStyleSheetLoader />
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='h-screen flex flex-col bg-[#FFFFFF] md:p-6 p-2 w-full max-w-[1600px]'>
          <TitleBar />
          <div className='h-full flex flex-col-reverse justify-end md:justify-center md:items-start items-center md:flex-row gap-2 bg-gray-100 border border-gray-200 rounded-lg shadow-xl md:p-10 p-2'>
            <InputCard/>
            <OutputCard/>
          </div> 
          
        </div>
      </div>
      {/* <Footer/> */}
    </ButtonProvider>
  )
}

export default App