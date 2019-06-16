import React from 'react';
import './Keypad.css';
import { Key } from './Key';

interface IKeypadProps {
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];

export const Keypad: React.FC<IKeypadProps> = ({ setDisplayValue }) => {
  return (
    <div className='keypad' data-testid='keypad'>
      <div className='numbers'>
        {numbers.map((key, index) => (
          <Key key={index} action={setDisplayValue} type='number' value={key} />
        ))}
      </div>
      <div className='operators'>
        {operators.map((key, index) => (
          <Key
            key={index}
            action={() => {
              void 0;
            }}
            type='operator'
            value={key}
          />
        ))}
      </div>
    </div>
  );
};
