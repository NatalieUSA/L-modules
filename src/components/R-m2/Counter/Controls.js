import React from 'react';
import Button from 'components/shared/components/Button/Button';
const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <Button type="button" onClick={onIncrement}>
        увеличить на 1
      </Button>
      <Button type="button" onClick={onDecrement}>
        уменьшить на 1
      </Button>
    </div>
  );
};
export default Controls;
