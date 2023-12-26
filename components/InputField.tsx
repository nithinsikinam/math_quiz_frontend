import { ChangeEvent } from 'react';

interface InputFieldProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    borderColor: string;
  }

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder, borderColor }) => (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className={`p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-${borderColor}-500 focus:ring-1 focus:ring-${borderColor}-500 transition-all`}
    />
  );

export default InputField