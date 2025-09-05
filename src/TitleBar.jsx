import FHLogo from '../src/assets/FareHarbor_Logo_1.png';

function titleBar() {
  return (
    <div className='flex flex-col justify-center items-center w-full mb-10'>
      <img src={FHLogo} alt="FareHarbor Logo" className='h-32' />
      <h1 className='text-4xl font-bold text-[#0A6ECE]'>BUTTON GENERATOR</h1>
    </div>
  )
}

export default titleBar