import { useState } from "react";
import BasicTab from './BasicTab';
import IconsTab from './IconsTab';
import AppearanceTab from './AppearanceTab';
import AdvancedTab from './AdvancedTab';

function InputCard() {

  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic', Component: BasicTab },
    { id: 'appearance', label: 'Appearance', Component: AppearanceTab },
    { id: 'icons', label: 'Icons', Component: IconsTab },
    { id: 'advanced', label: 'Advanced', Component: AdvancedTab },
    
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full basis-2/3">
      <div className="relative right-0">
        {/* Tab buttons */}
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-gray-300" role="tablist">
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
  )
}

export default InputCard