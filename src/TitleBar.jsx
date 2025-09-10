import FHLogo from '../src/assets/FareHarbor_Logo_1.png';

function titleBar() {
  return (
    <div className='flex flex-row md:flex-col justify-center items-center w-full md:mb-6'>
      <img src={FHLogo} alt="FareHarbor Logo" className='h-20 md:h-24' />
      <h1 className='text-xl md:text-2xl ml-5 mr-5 font-bold text-[#0A6ECE]'>BUTTON GENERATOR</h1>
    </div>
  )
}

export default titleBar