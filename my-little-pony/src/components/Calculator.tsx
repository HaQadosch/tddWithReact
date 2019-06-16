import React, { useState } from 'react';
import './Calculator.css';

import { Display } from './Display';
import { Keypad } from './Keypad';

type TOperator = 'PLUS' | 'MINUS' | 'MULT' | 'DIV';

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [selectedOperator, setSelectedOperator] = useState<string>('');
  const [storeValues, setStoreValues] = useState<string>('');

  return (
    <div className='calculator' data-testid='calculator'>
      <Display displayValue={displayValue} />
      <Keypad setDisplayValue={setDisplayValue} displayValue={displayValue} selectOperator={setSelectedOperator} />
    </div>
  );
};
