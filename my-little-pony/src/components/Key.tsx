import React from 'react';
import './Key.css';

export interface IKeyProps {
  action: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  value: string;
}

export const Key: React.FC<IKeyProps> = ({ value, type, action }) => {
  return (
    <div className={`key ${type}`} data-testid='key' onClick={() => action(value)}>
      <p className='key-value'>{value}</p>
    </div>
  );
};
