import React from 'react';
import './Keypad.css';

interface IKeypadProps {}

export const Keypad: React.FC<IKeypadProps> = props => {
  return (
    <div className='keypad' data-testid='keypad'>
      Keypad
    </div>
  );
};
