import React from 'react';
import './Keypad.css';
import { Key } from './Key';

interface IKeypadProps {
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  selectOperator: React.Dispatch<React.SetStateAction<string>>;
  displayValue: string;
}

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0'];
const operators = ['/', 'x', '-', '+'];

export const Keypad: React.FC<IKeypadProps> = ({ setDisplayValue, displayValue, selectOperator }) => {
  const handleNumberClick = (number: string) => {
    let newDisplay = '';
    if (number === '.' && /\./.test(displayValue)) {
      newDisplay = displayValue;
    } else if (number === '0' && displayValue === '0') {
      newDisplay = displayValue;
    } else {
      newDisplay = `${displayValue}${number}`;
    }
    setDisplayValue(newDisplay);
  };
  const handleOperatorClick = (operator: string) => {
    selectOperator(operator);
    setDisplayValue(`${displayValue} ${operator} `);
  };
  const handleSubmitClick = () => void 0;
  const handleCEClick = () => {
    setDisplayValue('0');
    selectOperator('');
  };

  return (
    <div className='keypad' data-testid='keypad'>
      <div className='numbers'>
        {numbers.map((key, index) => (
          <Key key={index} action={() => handleNumberClick(key)} type='number' value={key} />
        ))}
        <Key action={handleCEClick} type='number' value='ce' />
      </div>
      <div className='operators'>
        {operators.map((key, index) => (
          <Key key={index} action={() => handleOperatorClick(key)} type='operator' value={key} />
        ))}
      </div>
      <div className='submit'>
        <Key action={handleSubmitClick} type='submit' value='=' />
      </div>
    </div>
  );
};
