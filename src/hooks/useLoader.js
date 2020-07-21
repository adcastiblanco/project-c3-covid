import { useState } from 'react';

const useLoader = () => {
  const [loader, setloader] = useState(null);

  return [loader, setloader];
};

export default useLoader;
