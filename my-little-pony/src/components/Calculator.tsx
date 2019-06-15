import React, { useState } from 'react';
import './Calculator.css';

import { Display } from './Display';
import { Keypad } from './Keypad';

type TOperator = 'PLUS' | 'MINUS' | 'MULT' | 'DIV';

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  // const [numbers, setNumbers] = useState<number[]>([])
  // const [operators, setOperators] = useState<TOperator[]>([])
  // const [selectedOperator, setSelectedOperator] = useState<TOperator | null>()
  // const [storedValue, setStoredValue] = useState<number>()

  return (
    <div className='calculator' data-testid='calculator'>
      <Display displayValue={displayValue} />
      <Keypad setDisplayValue={setDisplayValue} />
    </div>
  );
};
