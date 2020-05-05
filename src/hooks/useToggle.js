import { useState } from 'react';

const useToggle = (value = false) => {
  const [bool, setBool] = useState(value);

  const toggleBool = () => {
    setBool((bool) => !bool);
  };
  return [bool, toggleBool];
};

export default useToggle;
