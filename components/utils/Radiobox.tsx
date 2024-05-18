import React, { ChangeEvent } from 'react';

interface RadioboxProps {
  id: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Radiobox: React.FC<RadioboxProps> = ({
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-[7px]">
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default Radiobox;
