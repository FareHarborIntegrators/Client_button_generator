import FHLogo from '../src/assets/FareHarbor_Logo_1.png';

function titleBar() {
  return (
    <div className='flex flex-row justify-center md:justify-start items-center w-full md:mb-2 p1-2'>
      <img src={FHLogo} alt="FareHarbor Logo" className='h-20' />
      <h1 className='flex gap-2 md:gap-0 flex-row md:flex-col text-lg md:text-xl ml-5 mr-5 font-bold text-[#0A6ECE]'>
        <span>BUTTON</span>
        <span>GENERATOR</span>
      </h1>
    </div>
  )
}

export default titleBar