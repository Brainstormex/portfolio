import React from "react";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      <input
        className="w-full text-gray-900 placeholder-gray-400 border-gray-400 rounded-md focus:ring-0 focus:border focus:border-[#3cacd7]"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
