import { useState, useRef, useEffect } from "react";

export default function RadioDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-xs" ref={dropdownRef}>
      {/* Label */}
      {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}

      {/* Trigger Button */}
      <button
        type="button"
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setOpen(!open)}
      >
        {options.find((opt) => opt.value === value)?.label || "Select..."}
        <span className="float-right text-gray-400">
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1 text-sm text-gray-700">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100 ${
                    value === option.value ? "font-medium text-blue-600" : ""
                  }`}
                >
                  {option.label}
                  {value === option.value && (
                    <span className="text-blue-500">●</span> // Radio indicator
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}