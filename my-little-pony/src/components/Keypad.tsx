import React from 'react';
import './Keypad.css';

interface IKeypadProps {
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Keypad: React.FC<IKeypadProps> = ({ setDisplayValue }) => {
  return (
    <div className='keypad' data-testid='keypad'>
      <div className='numbers'>numbers</div>
      <div className='operators'>operators</div>
    </div>
  );
};
