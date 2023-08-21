import { useContext } from 'react';

export default function RadioBtn({ children, value, name, disabled, onChange }: any) {
  return (
    <label className="text-xl ml-1 mr-5">
      <input
        type="radio"
        value={value}
        id={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
        className="mr-2"
      />
      {children}
    </label>
  );
}
