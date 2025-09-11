import { useButtonContext } from './ButtonContext';

function BasicTab({}) {
    const inputStyles = 'pl-2 pt-1 pb-1 w-full max-w-96 text-sm bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto placeholder-gray-400!';
    const radioStyles= 'text-sm w-full flex justify-center peer-checked:bg-fh-blue peer-checked:text-white border border-fh-blue text-fh-blue px-4 py-2 rounded cursor-pointer transition';
    const h3Stylings = 'block mb-1 pl-1 text-sm font-medium text-gray-700'
    const {
            btnColor,
            btnLocation,
            setBtnText,
            setBtnLink,
            setBtnColor,
            setBtnLocation,

          } = useButtonContext();
    
    const handleBtnTxtInput = (textInput) => {
        setBtnText(textInput.target.value);
    }
    const handleBtnLinkInput = (linkInput) => {
        setBtnLink(linkInput.target.value);
    }
    const handleBtnLocationInput = (event) => {
        setBtnLocation(event.target.value);
    }

    return (
        <div className="flex flex-col justify-start items-center h-full w-full pl-2 pr-2 pt-6 mb-4">
            <div className="flex flex-col gap-4 md:flex-row justify-around items-center w-full mb-3 md:mb-6">
                <div className='flex flex-col justify-start items-start w-full'>
                    <h3 className={h3Stylings}>Button Text</h3>
                    <input type="text-input" className={inputStyles} onChange={(e) => handleBtnTxtInput(e)} placeholder='Book Now'/>
                </div>
                <div className='flex flex-col justify-center items-start w-full'>
                    <h3 className={h3Stylings}>FareHarbor Booking Link</h3>
                    <input type="text-input" className={inputStyles} onChange={(e) => handleBtnLinkInput(e)} placeholder='Booking Link'/>
                </div>
            </div>
        
            <div className='flex w-full justify-start items-center'>
                <div className='flex flex-col items-start justify-start w-full max-w-[800px]'>
                    <h3 className={h3Stylings}>Button Location</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 w-full">
                        <div className="w-full flex">
                            <input name="fixedLocation" id="standard-button" type="radio" value='' className="peer hidden" checked={btnLocation === ''} onChange={(e) => handleBtnLocationInput(e)}/>
                            <label htmlFor="standard-button" className={radioStyles}>Standard</label>
                        </div>
                        <div className="w-full flex">
                            <input name="fixedLocation" id="top" type="radio" value="top" className="peer hidden" checked={btnLocation === 'top'} onChange={(e) => handleBtnLocationInput(e)}/>
                            <label htmlFor="top" className={radioStyles}>Top</label>
                        </div>
                        <div className="w-full flex">
                            <input name="fixedLocation" id="bottom" type="radio" value="bottom" className="peer hidden" checked={btnLocation === 'bottom'} onChange={(e) => handleBtnLocationInput(e)}/>
                            <label htmlFor="bottom" className={radioStyles}>Bottom</label>
                        </div>
                        <div className="w-full flex">
                            <input name="fixedLocation" id="side" type="radio" value="side" className="peer hidden" checked={btnLocation === 'side'} onChange={(e) => handleBtnLocationInput(e)}/>
                            <label htmlFor="side" className={radioStyles}>Side</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicTab