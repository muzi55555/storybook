import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import IconButton from './IconButton';

interface IDefaultTextFieldProps {
  iconPath: string;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
  placeholder: string;
  onChange: () => void;
  value: string;
  errorMessage: string;
  isError: boolean;
}

export default function DefaultTextField({
  iconPath,
  alt,
  width,
  height,
  onClick,
  placeholder,
  onChange,
  value,
  errorMessage,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderColor = isFocused ? 'border-purple-500' : !value ? 'border-red-300' : 'border-primary';
  return (
    <div onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className={`border-b ${borderColor}`}>
      <input className='outline-none' type='text' onChange={onChange} value={value} placeholder={placeholder} />
      {!!value && <IconButton iconPath={iconPath} alt={alt} width={width} height={height} onClick={onClick} />}
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
