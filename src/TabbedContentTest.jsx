import React, { useState } from 'react';
import { useButtonContext } from './ButtonContext';
import BasicTab from './BasicTab';
import IconsTab from './IconsTab';
import AppearanceTab from './AppearanceTab';
import AdvancedTab from './AdvancedTab';


// Example Components for each tab
function DashboardTab() {
      const {
        setBtnText,
      } = useButtonContext();
      
      const handleBtnTxtInput = (textInput) => {
        setBtnText(textInput.target.value);
      }
      let inputStyles = 'border-gray-300 border-solid border-2 m-2 pl-1';
      const h3Stylings = 'text-lg font-bold mb-1'
  return (
    <div className='flex flex-col justify-center items-center m-3'>
          <h3 className={h3Stylings}>Enter Your Button Text</h3>
          <input type="text-input" className={inputStyles} onChange={(e) => handleBtnTxtInput(e)} placeholder='Book Now'/>
        </div>
  );
}

function ProfileTab() {
  return (
    <p className="text-slate-400 font-light">
      The reading of all good books is like a conversation with the finest minds of past centuries.
    </p>
  );
}

function SettingsTab() {
  return (
    <p className="text-slate-400 font-light">
      Comparing yourself to others is the thief of joy.
    </p>
  );
}

function TabbedContentTest() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Basic', Component: BasicTab },
    { id: 'appearance', label: 'Appearance', Component: AppearanceTab },
    { id: 'settings', label: 'Advanced', Component: AdvancedTab },
    { id: 'icons', label: 'Icons', Component: IconsTab }
  ];

  return (
    <div className="w-full">
      <div className="relative right-0">
        {/* Tab buttons */}
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="z-30 flex-auto text-center">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer
                  ${activeTab === tab.id ? 'text-slate-900 font-semibold bg-white shadow' : 'text-slate-600 bg-inherit'}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab panels */}
        <div className="p-5">
          {tabs.map(({ id, Component }) => (
            <div
              key={id}
              id={id}
              role="tabpanel"
              className={`${activeTab === id ? 'block opacity-100' : 'hidden opacity-0'} transition-opacity duration-300`}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabbedContentTest;