import React from 'react';
import './Key.css';
import { ICalculator } from './Calculator';

export interface IKeyProps {
  action: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => React.SetStateAction<ICalculator>;
  type: string;
  value: string;
}

export const Key: React.FC<IKeyProps> = ({ value, type, action }) => {
  return (
    <div className={`key ${type}`} data-testid='key' onClick={action}>
      <p className='key-value'>{value}</p>
    </div>
  );
};
