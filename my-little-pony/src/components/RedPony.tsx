import React from 'react';

interface IRedPonyProps {}

export const RedPony: React.FC<IRedPonyProps> = props => {
  return (
    <div className='redPony' data-testid='redPony'>
      RedPony
    </div>
  );
};
