import React from "react";
import downArrow from "../Assets/down-arrow.svg";

const CalculatorInput = ({ id, label, placeholder, showIcon = true }) => {

    function Input({ className = "", ...props }) {
        return (
            <input
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                {...props}
            />
        )
    }
  return (
    <div className="space-y-2 relative">
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative">
        <Input
          id={id}
          placeholder={placeholder}
          className="bg-white-700 border-white-600 text-white placeholder:text-white-400 pr-10"
        />
        {showIcon && (
          <img
            src={downArrow}
            alt="Dropdown"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};

export default CalculatorInput;
