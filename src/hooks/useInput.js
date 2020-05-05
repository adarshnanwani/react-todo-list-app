import { useState } from 'react';

const useInput = (value = '') => {
  const [input, setInput] = useState(value);

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const resetInput = () => {
    setInput('');
  };
  return [input, changeInput, resetInput];
};

export default useInput;
