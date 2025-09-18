import { useState } from "react";
import { useMediaQuery } from './Hooks/useMediaQuery';
import BasicIcon from "./Icons/BasicIcon";
import AppearanceIcon from "./Icons/AppearanceIcon";
import IconsIcon from "./Icons/IconsIcon";  
import BasicTab from './BasicTab';
import IconsTab from './IconsTab';
import AppearanceTab from './AppearanceTab';

function InputCard() {

  const [activeTab, setActiveTab] = useState('basic');
  const activeColor = '#0a79e9';
  const isAboveXSmall = useMediaQuery('(min-width: 500px)');

  const tabs = [
    { id: 'basic', label: 'Button Config.', icon: <BasicIcon activeTab={activeTab} activeColor={activeColor} />, Component: BasicTab },
    { id: 'appearance', label: 'Appearance', icon: <AppearanceIcon activeTab={activeTab} activeColor={activeColor} />, Component: AppearanceTab },
    { id: 'icons', label: 'Icons', icon: <IconsIcon activeTab={activeTab} activeColor={activeColor} />, Component: IconsTab },
  ];

  return (
    <div className="md:overflow-visible h-full flex flex-col justify-start md:justify-start items-start w-full basis-2/3">
      <div className="relative right-0 w-full h-full">
        {/* Tab buttons */}
        <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-gray-300" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="z-30 flex-auto text-center">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`z-30 flex items-center justify-center w-full px-0 py-2 text-xs mb-0 transition-all ease-in-out duration-350 border-0 rounded-md cursor-pointer
                  ${activeTab === tab.id ? 'text-slate-900 font-semibold bg-white shadow' : 'text-slate-600 bg-inherit'}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
              >
                <span className="flex flex-col md:flex-row items-center justify-center">
                  <div className="flex items-center justify-center">
                    {tab.icon}
                  </div>
                  {isAboveXSmall && <div className="flex items-center justify-center pl-1">
                    {tab.label}
                  </div>}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Tab panels */}
        <div className="p-5 h-full w-full flex items-center justify-center">
          {tabs.map(({ id, Component }) => (
            <div
              key={id}
              id={id}
              role="tabpanel"
              className={`${activeTab === id ? 'block opacity-100' : 'hidden opacity-0'} h-full w-full transition-opacity ease-in-out duration-350`}
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