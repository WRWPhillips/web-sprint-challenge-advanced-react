import { useState } from 'react';

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

return [showSuccessMessage, values, handleSubmit, handleChanges];

}
export default useForm;
