import React from "react";

const Button = ({ btnText }) => {
  return (
    <div>
      <button className="bg-yellow-50 rounded-sm text-[14px] px-5 py-2 tracking-[2px] font-serif font-semibold transition duration-300 opacity-[0.7] hover:opacity-[1] ease-in ">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
