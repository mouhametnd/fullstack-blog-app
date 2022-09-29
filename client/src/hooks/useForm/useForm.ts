import { useState } from 'react';
import { IUseFormProps, TUseFormError } from './useFormTypes';
import axios from 'axios';

const useForm = (form: IUseFormProps) => {
  const { formValues, reqEndpoint, httpMethod, headers } = form;

  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const [error, setError] = useState<TUseFormError>({ msg: false });
  const setFormValue = (name: string, newValue: string) => {
    formValues[name]!.value = newValue;
  };

  const isFormValid = () => {
    const isValid = Object.keys(formValues)
      .map(propName => formValues[propName]!.regex.test(formValues[propName]!.value))
      .every(value => value === true);
    return isValid;
  };

  const sendForm = async (successCb?: () => unknown, errorCb?: () => unknown) => {
    if (!isFormValid()) return setError({ msg: 'Form fields invalid' });

    try {
      setIsLoading(true);
      const reqBody: { [x: string]: string } = {};
      Object.keys(formValues).forEach(propName => {
        const { name, value } = formValues[propName]!;
        reqBody[name] = value;
      });
      const res = await axios[httpMethod](reqEndpoint, reqBody, headers);

      setIsLoading(false);
      setError({ msg: false });
      successCb && successCb();
      return { ...res.data.result };
    } catch (error: any) {
      setIsLoading(false);
      setError({ msg: error.response.data.error });
      errorCb && errorCb();
      return { result: null };
    }
  };

  return { isLoading, error, setFormValue, isFormValid, sendForm };
};

export default useForm;
