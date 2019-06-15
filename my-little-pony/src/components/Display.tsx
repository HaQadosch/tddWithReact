import React from 'react';
import './Display.css';

export interface IDisplayProps {
  displayValue: string;
}

export const Display: React.FC<IDisplayProps> = ({ displayValue }) => {
  return (
    <div className='display' data-testid='display'>
      <p className='displayValue'>{displayValue}</p>
    </div>
  );
};
