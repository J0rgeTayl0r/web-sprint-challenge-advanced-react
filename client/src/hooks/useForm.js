// write your custom hook here to control your checkout form
import { useState } from 'react'
export const useForm = ( key, initialValue) => {
  // email value ✅
  // handlechanges should handle all inputs
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        const name = e.target.name
        const value = e.target.value
      setValues({
          ...values,
          [name]:value,
    
      });
    };
  


  const clearForm = (e) => {
      if (e) e.preventDefault();
       setShowSuccessMessage(true);
       setValues(initialValue);
  };

  return [values, handleChanges, showSuccessMessage];
};