// write your custom hook here to control your checkout form
import { useState } from 'react'
export const useForm = ( initialValue) => {
  // email value ✅
  // handlechanges should handle all inputs
  const [showSuccessMes, setShowSuccessMes] = useState(false)
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value,
    
      });
    };
  


//   const clearForm = (e) => {
//     if (e) e.preventDefault();
//     setValues(initialValue);
//   };

  return [values, handleChanges, showSuccessMes, setShowSuccessMes];
};