import { useState } from 'react';
import { IUseFormProps } from './useFormTypes';
import axios from 'axios';

const useForm = (form: IUseFormProps) => {
  const { formValues, reqEndpoint, httpMethod, headers } = form;
  const [isLoading, setIsLoading] = useState<null | boolean>(null);

  const setFormValue = (name: string, newValue: string) => {
    formValues[name]!.value = newValue;
  };

  const isFormValid = () => {
    const isValid = Object.keys(formValues)
      .map(propName => formValues[propName]!.regex.test(formValues[propName]!.value))
      .every(value => value === true);
    return isValid;
  };

  const sendForm = async () => {
    if (!isFormValid()) return { error: 'Input fields invalid' };
    setIsLoading(true);

    try {
      const reqBody: { [x: string]: string } = {};
      Object.keys(formValues).forEach(propName => {
        const { name, value } = formValues[propName]!;
        reqBody[name] = value;
      });

      const { data } = await axios[httpMethod](reqEndpoint, reqBody, headers);

      setIsLoading(false);
      return { ...data, error: false };
    } catch (error: any) {
      setIsLoading(false);
      return error.response.data;
      
    }
  };

  return { isLoading, setFormValue, isFormValid, sendForm };
};

export default useForm;
