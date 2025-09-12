import React from 'react';

function ToggleSwitch({ enabled, setEnabled, label }) {
  const toggleId = React.useId(); // Ensures unique id for accessibility

  const handleToggle = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center space-x-2">
      {label && (
        <label
          htmlFor={toggleId}
          className="text-sm font-medium text-gray-700 cursor-pointer block mb-1 pl-1"
          onClick={handleToggle} // Makes label clickable
        >
          {label}
        </label>
      )}
      <button
        id={toggleId}
        role="switch"
        aria-checked={enabled}
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
          enabled ? 'bg-fh-blue' : 'bg-white'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white border-2 border-gray-300 transition-transform duration-300 ${
            enabled ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

export default ToggleSwitch;