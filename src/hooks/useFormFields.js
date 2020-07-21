import { useState } from 'react';

const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (e) {
      setValues({
        ...fields,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useFormFields;
