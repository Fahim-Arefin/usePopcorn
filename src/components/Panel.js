import { useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

function Panel({ children, className }) {
  const [isOpen, setIsopen] = useState(true);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className={`bg-[#2b3035] ${className} relative`}>
      <div className="min-h-[60px]">{isOpen && children}</div>
      <div onClick={handleClick} className="absolute top-3 right-4">
        {isOpen ? (
          <BsDash className="bg-[#212529] text-white h-6 w-6 rounded-full cursor-pointer" />
        ) : (
          <BsPlus className="bg-[#212529] text-white h-6 w-6 rounded-full cursor-pointer" />
        )}
      </div>
    </div>
  );
}

export default Panel;
