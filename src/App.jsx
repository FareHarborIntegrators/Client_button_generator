import { ButtonProvider } from './ButtonContext';
import InputCard from './inputCard'
import OutputCard from './outputCard';
import TitleBar from './titleBar';
import DynamicStyleSheetLoader from './Hooks/DynamicStyleSheetLoader';
import './App.css'

function App() {
  return (
    <ButtonProvider>
      <DynamicStyleSheetLoader />
      <div className='flex flex-col bg-[#FFFFFF] lg:p-10 md:p-6 p-2 h-screen'>
        <TitleBar />
        <div className='h-full flex flex-col-reverse justify-center items-center md:flex-row gap-2 bg-gray-100 border border-gray-200 rounded-lg shadow-xl lg:p-12 md:p-10 p-2'>
          <InputCard/>
          <OutputCard/>
        </div> 
      </div>
    </ButtonProvider>
  )
}

export default App
