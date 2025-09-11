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
        <div className='flex flex-col bg-[#FFFFFF] lg:p-10 md:p-6 p-2 h-full w-full max-w-[1600px]'>
          <TitleBar />
          <div className='h-full flex flex-col-reverse justify-end md:justify-center items-center md:flex-row gap-2 bg-gray-100 border border-gray-200 rounded-lg shadow-xl lg:p-12 md:p-10 p-2'>
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
