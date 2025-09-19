import { useState } from "react";
import AdvancedIcon from "./Icons/AdvancedIcon";
import QuestionIcon from "./Icons/QuestionIcon";
import AdvancedTab from "./AdvancedTab";

function CodeOutputModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center bg-gray-100">
    
        <button onClick={openModal} 
                className='px-2 py-1 text-xs bg-fh-blue text-white rounded hover:bg-blue-700 transition flex items-center gap-1'>
                <AdvancedIcon activeTab={'advanced'} activeColor={'#ffffff'}/>Get Code
        </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Modal content */}
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 w-full m-4 max-w-[1000px] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex items-center">
              <h2 className="text-xl font-semibold mb-4">FareHarbor Button HTML</h2>
            </div>
            <p className="text-gray-600">The stylesheet, API, and button HTML are all required for your button to lightframe and function properly.</p>
            <AdvancedTab/>
          </div>
        </div>
      )}
    </div>
  );
}

export default CodeOutputModal;