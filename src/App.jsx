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
      <div className='flex flex-col bg-[#FFFFFF] p-10'>
        <TitleBar />
        <div className='flex flex-col sm:flex-row bg-gray-100 border border-gray-200 rounded-lg shadow-xl p-4'>
          <InputCard/>
          <OutputCard/>
        </div> 
      </div>
    </ButtonProvider>
  )
}

export default App
