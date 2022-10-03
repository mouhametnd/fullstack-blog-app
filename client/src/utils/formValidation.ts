import { logInUseFormProps } from '../components/login/logInConstans';
import { IUseFormValidationArg } from '../types/types';

const formValidation = (formValues: IUseFormValidationArg) => {
  const setFormValue = (name: string, newValue: string) => {
    formValues[name]!.value = newValue;
  };

  const isFormValid = () => {
    const isValid = Object.keys(formValues)
      .map(propName => formValues[propName]!.regex.test(formValues[propName]!.value))
      .every(value => value === true);
    return isValid;
  };

  const getFormValues = () => {
    const values: { [x: string]: string } = {};
    Object.keys(formValues).forEach(propName => {
      values[propName] = formValues[propName]!?.value;
    });

    return values;
  };

  const resetFormValidation = (newFormValues: IUseFormValidationArg) => {
    formValues = newFormValues;
  };

  {
  }
  return { setFormValue, isFormValid, getFormValues, resetFormValidation };
};

export default formValidation;
