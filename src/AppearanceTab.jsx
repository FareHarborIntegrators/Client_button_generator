import { useButtonContext } from './ButtonContext';
import RadioDropdown from "./RadioDropdown";
import StationaryColorPicker from './StationaryColorPicker';

function AppearanceTab({}) {

    const btnSizeDropdown = [
      { value: "small", label: "Small" },
      { value: "default", label: "Default" },
      { value: "large", label: "Large" },
    ];
    const btnShapeDropdown = [
      { value: "default", label: "Default" },
      { value: "round", label: "Round" },
      { value: "square", label: "Square" },
    ];
    const btnStyleDropdown = [
      { value: "", label: "Default" },
      { value: "2d", label: "2.5D" },
      { value: "true-flat", label: "Flat 1" },
      { value: "flat", label: "Flat 2" },
      { value: "outline", label: "Outline" },
    ];

    const {
            btnColor,
            btnShape,
            btnSize,
            btnStyle,
            setBtnColor,
            setBtnShape,
            setBtnStyle,
            setBtnSize,

          } = useButtonContext();


    return (
    <div className='flex flex-col md:flex-row w-full h-full justify-start items-start pl-2 pr-2 pt-6 mb-4'>
        <div className='flex h-full w-full flex-col justify-center md:justify-start items-center md:items-start mb-4'>
          <div className='block mb-1 text-sm font-medium text-gray-700'>Button Color</div>
          <StationaryColorPicker color={btnColor} setColor={setBtnColor} />
        </div>

        <div className='flex pl-4 h-full w-full flex-col justify-start items-center gap-4'>
          <RadioDropdown
            label="Button Shape"
            options={btnShapeDropdown}
            value={btnShape}
            onChange={setBtnShape}
          />
          <RadioDropdown
            label="Button Size"
            options={btnSizeDropdown}
            value={btnSize}
            onChange={setBtnSize}
          />
          <RadioDropdown
            label="Button Style"
            options={btnStyleDropdown}
            value={btnStyle}
            onChange={setBtnStyle}
          />
        </div>
      </div>
    )
}

export default AppearanceTab