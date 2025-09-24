import { useEffect, useState } from 'react';
import { useButtonContext } from './ButtonContext';
import ToggleSwitch from './ToggleSwitch';

function BasicTab({}) {
    const inputStyles = 'pl-2 pt-1 pb-1 w-full max-w-96 text-sm bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto placeholder-gray-400!';
    const radioStyles= 'text-sm w-full flex justify-center items-center peer-checked:bg-fh-blue peer-checked:text-white border border-fh-blue text-fh-blue px-4 py-2 rounded cursor-pointer transition';
    const h3Stylings = 'block mb-1 pl-1 text-sm font-medium text-gray-700'
    const {
            btnColor,
            btnLocation,
            btnActive,
            btnVisibility,
            btnLink,
            setBtnActive,
            setBtnText,
            setBtnLink,
            setBtnColor,
            setBtnLocation,
            setBtnVisibility,

          } = useButtonContext();

    const DEFAULT_FLOW_REGEX = /^https:\/\/fareharbor\.com\/embeds\/book\/[a-zA-Z0-9\-_]+\/\?full-items=yes$/;
    const FLOW_START_ON_CALENDAR_REGEX = /^https:\/\/fareharbor\.com\/embeds\/book\/[a-zA-Z0-9_-]+\/items\/calendar\/(?:\?.*)?$/;
    const ITEM_REGEX = /^https:\/\/fareharbor\.com\/embeds\/book\/[a-zA-Z0-9_-]+\/items\/\d+\/(?:\?.*)?$/;
    const AVAILABILITY_REGEX = /^https:\/\/fareharbor\.com\/embeds\/book\/[a-zA-Z0-9_-]+\/items\/\d+\/availability\/\d+\/book\/(?:\?.*)?$/;
    
    const handleBtnTxtInput = (textInput) => {
        setBtnText(textInput.target.value);
    }
    const handleBtnLinkInput = (linkInput) => {
        setBtnLink(linkInput.target.value);
        setIsValidUrl(DEFAULT_FLOW_REGEX.test(linkInput.target.value) || 
                    FLOW_START_ON_CALENDAR_REGEX.test(linkInput.target.value) || 
                    ITEM_REGEX.test(linkInput.target.value) || 
                    AVAILABILITY_REGEX.test(linkInput.target.value) 
                    );
    }
    const handleBtnLocationInput = (event) => {
        setBtnLocation(event.target.value);
    }

    const handleBtnVisibility = (event) => {
        setBtnVisibility(event.target.value);
    } 

    const [hasMounted, setHasMounted] = useState(false);
    const [isValidURL, setIsValidUrl] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    
    useEffect(() => {
        if(!isValidURL){
            setBtnActive(false);
        }

    }, [isValidURL])

    return (
        <div className="flex flex-col justify-start items-center h-full w-full pl-2 pr-2 pt-6 mb-3">
            <div className="flex flex-col gap-4 md:flex-row justify-around items-center w-full mb-6 md:mb-8 pb-10 md:pb-2">
                <div className='flex flex-col justify-start items-start w-full'>
                    <h3 className={h3Stylings}>Button Text</h3>
                    <input type="text-input" className={inputStyles} onChange={(e) => handleBtnTxtInput(e)} placeholder='Book Now'/>
                </div>
                <div className='relative flex flex-col justify-center items-start w-full'>
                    <h3 className={h3Stylings}>FareHarbor Booking Link</h3>
                    <input type="text-input" className={inputStyles} onChange={(e) => handleBtnLinkInput(e)} placeholder='Booking Link'/>
                        {/* DISABLED PREVIEW LIGHTFRAME BUTTON */}
                        {/* {(hasMounted && isValidURL) && (
                            <div className={`transition-all duration-500 ease-out transform absolute top-18 left-0 
                                ${isValidURL ? 'animate-[var(--animate-fade-in-down)]' : 'animate-[var(--animate-fade-out-up)]'} 
                                ${!hasMounted && !isValidURL ? 'opacity-0 pointer-events-none' : ''}`}
                            >
                                <ToggleSwitch enabled={btnActive} setEnabled={setBtnActive} label="Preview Lightframe" />
                            </div>
                        )} */}
                </div>
            </div>
        
            <div className='flex w-full justify-start items-center mb-4 pb-2'>
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

            <div className='flex flex-col items-start justify-start w-full max-w-[800px]'>
              <h3 className={h3Stylings}>Button Visibility</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 w-full">
                <div className="w-full flex">
                  <input name="btnVisibility" id="bothDesktopAndMobile" type="radio" value="bothDesktopAndMobile" className="peer hidden" checked={btnVisibility === 'bothDesktopAndMobile'} onChange={(e) => handleBtnVisibility(e)}/>
                  <label htmlFor="bothDesktopAndMobile" className={radioStyles}>Desktop & Mobile</label>
                </div>
                <div className="w-full flex">
                  <input name="btnVisibility" id="desktopOnly" type="radio" value="mobile" className="peer hidden" checked={btnVisibility === 'mobile'} onChange={(e) => handleBtnVisibility(e)}/>
                  <label htmlFor="desktopOnly" className={radioStyles}>Desktop Only</label>
                </div>
                <div className="w-full flex">
                  <input name="btnVisibility" id="mobileOnly" type="radio" value="desktop" className="peer hidden" checked={btnVisibility === 'desktop'} onChange={(e) => handleBtnVisibility(e)}/>
                  <label htmlFor="mobileOnly" className={radioStyles}>Mobile Only</label>
                </div>
              </div>
            </div>
        </div>
    )
}

export default BasicTab