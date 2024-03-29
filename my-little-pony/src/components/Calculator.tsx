import React, { useState, useEffect } from 'react';
import './Calculator.css';

import { Display } from './Display';
import { Keypad } from './Keypad';

type TOperator = 'OPERATOR' | 'CE' | 'SUBMIT' | 'NUMBER';
export type TDisplay =
  | '9'
  | '8'
  | '7'
  | '6'
  | '5'
  | '4'
  | '3'
  | '2'
  | '1'
  | '.'
  | '0'
  | '/'
  | 'x'
  | '-'
  | '+'
  | 'CE'
  | '=';

export interface ICalculator {
  action: TOperator;
  payload: TDisplay;
}

export const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [selectedOperator, setSelectedOperator] = useState<string>('');
  const [storeValues, setStoreValues] = useState<string>('');
  const [keyEvent, setKeyEvent] = useState<ICalculator>({ action: 'CE', payload: '0' });

  useEffect(() => {
    return () => {};
  }, [selectedOperator]);

  return (
    <div className='calculator' data-testid='calculator'>
      <Display displayValue={displayValue} />
      <Keypad setKeyEvent={setKeyEvent} />
    </div>
  );
};
