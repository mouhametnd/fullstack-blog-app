import { useState } from 'react';
import { IUseFormProps, TUseFormError } from './useFormTypes';
import axios from 'axios';
import formValidation from '../../utils/formValidation';

const useForm = (form: IUseFormProps) => {
  const { formValues, reqEndpoint, httpMethod, headers } = form;

  const { getFormValues, isFormValid, setFormValue, resetFormValidation } = formValidation(formValues);

  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const [error, setError] = useState<TUseFormError>({ msg: false });

  const resetFormState = () => {
    setIsLoading(false);
    setError({ msg: false });
    resetFormValidation(formValues);
  };

  const sendForm = async () => {
    if (!isFormValid()) {
      setError({ msg: 'Form fields invalid' });
      return { result: null };
    }

    try {
      setIsLoading(true);
      const reqBody: { [x: string]: string } = getFormValues();
      const res = await axios[httpMethod](reqEndpoint, reqBody, { headers });
      setIsLoading(false);
      setError({ msg: false });
      return { ...res.data };
    } catch (error: any) {
      setIsLoading(false);
      console.log(error)
      setError({ msg: error.response.data.error || 'Error while submiting the form' });
      return { result: null };
    }
  };

  return { isLoading, error, setFormValue, isFormValid, sendForm, resetFormState };
};

export default useForm;
