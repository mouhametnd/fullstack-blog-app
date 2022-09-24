import { useState } from 'react';
import { IUseFormProps } from './useFormTypes';

const useForm = (formValues: IUseFormProps) => {
  const [isFormValid, setIsFormValid] = useState(false);

  // todo if type is not dynamic we change it to string
  const setFormValue = (name: keyof typeof formValues, newValue: string) => {
    formValues[name]!.value = newValue;
  };

  const validateFormValues = () => {
    const isFormValid = Object.keys(formValues)
      .map(propName => formValues[propName]!.regex.test(formValues[propName]!.value))
      .includes(false);

    setIsFormValid(isFormValid);
  };

  return { isFormValid, setFormValue, validateFormValues };
};

export default useForm;
