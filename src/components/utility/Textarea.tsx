import React from "react";

interface TextareaProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      <textarea
        className="w-full text-gray-900 placeholder-gray-400 border-gray-400 rounded-md focus:ring-0 focus:border focus:border-[#3cacd7]"
        rows={5}
        style={{ resize: "none" }}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
