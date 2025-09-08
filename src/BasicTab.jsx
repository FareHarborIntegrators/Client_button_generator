import { useButtonContext } from './ButtonContext';
import ColorPicker from './ColorPicker';

function BasicTab({}) {
    const inputStyles = 'border-gray-300 border-solid border-2 m-2 pl-1';
    const radioStyles= 'peer-checked:bg-blue-600 peer-checked:text-white border border-blue-600 text-blue-600 px-4 py-2 rounded cursor-pointer transition';
    const h3Stylings = 'text-lg font-bold mb-1'
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
        <div>
            <div className="flex justify-around items-center mb-3">
                <div className='flex flex-col justify-center items-center m-3'>
                    <h3 className={h3Stylings}>Enter Your Button Text</h3>
                    <input type="text-input" className={inputStyles} onChange={(e) => handleBtnTxtInput(e)} placeholder='Book Now'/>
                </div>
                <div className='flex flex-col justify-center items-center m-3'>
                    <h3 className={h3Stylings}>Enter Your Button Link</h3>
                    <input type="text-input" className={inputStyles} onChange={(e) => handleBtnLinkInput(e)} placeholder='Booking Link'/>
                </div>
            </div>
        
            <div className='flex justify-around items-center mb-3'>
                <div className='flex flex-col justify-center items-center m-3'>
                    <h3 className={h3Stylings}>Choose Your Button Color</h3>
                    <div className="flex justify-center items-center">
                        <ColorPicker color={btnColor} setColor={setBtnColor} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h3 className={h3Stylings}>Button Location</h3>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="mx-1 my-3">
                        <input name="fixedLocation" id="standard-button" type="radio" value='' className="peer hidden" checked={btnLocation === ''} onChange={(e) => handleBtnLocationInput(e)}/>
                        <label htmlFor="standard-button" className={radioStyles}>Standard Button (No Float)</label>
                    </div>
                    <div className="mx-1 my-3">
                        <input name="fixedLocation" id="top" type="radio" value="top" className="peer hidden" checked={btnLocation === 'top'} onChange={(e) => handleBtnLocationInput(e)}/>
                        <label htmlFor="top" className={radioStyles}>Top</label>
                    </div>
                    <div className="mx-1 my-3">
                        <input name="fixedLocation" id="bottom" type="radio" value="bottom" className="peer hidden" checked={btnLocation === 'bottom'} onChange={(e) => handleBtnLocationInput(e)}/>
                        <label htmlFor="bottom" className={radioStyles}>Bottom</label>
                    </div>
                    <div className="mx-1 my-3">
                        <input name="fixedLocation" id="side" type="radio" value="side" className="peer hidden" checked={btnLocation === 'side'} onChange={(e) => handleBtnLocationInput(e)}/>
                        <label htmlFor="side" className={radioStyles}>Side</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicTab