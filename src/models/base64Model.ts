import { useState } from 'react';

export default () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return { input, setInput, output, setOutput };
};
