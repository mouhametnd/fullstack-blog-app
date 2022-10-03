import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { API_BASE_URL, baseFormValues, baseInputProps } from '../../constants/globalConstants';
import useForm from '../../hooks/useForm/useForm';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import { TBaseInputPropsUnion } from '../../types/types';
import Loader from '../loader/Loader';
import PenIcon from './PenIcon';

interface IProps {
  formTitle: string;
  inputName: TBaseInputPropsUnion;
  userToken: string;
  defaultValue: string;
  successCb?: (...a: any) => any;
  reqEndpoint: string;
}
const useFormArg: IUseFormProps = {
  httpMethod: 'patch',
  formValues: {},
  headers: {},
  reqEndpoint: '',
};

const EditUserDetailForm = (props: IProps) => {
  const { formTitle, inputName, userToken, defaultValue, successCb, reqEndpoint } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  useFormArg.formValues = { [inputName]: baseFormValues[inputName] };
  useFormArg.headers = { Authorization: userToken };
  useFormArg.reqEndpoint = reqEndpoint;

  const { error, isLoading, sendForm, resetFormState, setFormValue, getFormValues } = useForm(useFormArg);

  const hideForm = (e: FormEvent) => {
    e.preventDefault();
    resetFormState();
    setShowModal(false);
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const inputValue = getFormValues()[inputName];
    if (inputValue === defaultValue) return setShowModal(false);
    try {
      const { result } = await sendForm();
      console.log(result)
      if (result) {
        setShowModal(false);
        successCb && successCb(result);
      }
    } catch (error) {
      console.log(error);
      console.log('fff');
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => setFormValue(baseInputProps[inputName].name, e.target.value);

  useEffect(() => {
    if (showModal) setFormValue(inputName, defaultValue);
  }, [showModal]);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="w-max ">
        <PenIcon />
      </button>

      {showModal && (
        <section className="fixed z-30 top-0 left-0 flex w-full h-screen bg-cyanGreen-100/10">
          <form className="m-auto  w-80 min-h-[200px] p-6 rounded-lg  bg-white-100 flex flex-col gap-3 bg-white ">
            <h4 className="font-medium text-cyanGreen-100 text-xl">Edit {formTitle}</h4>

            {isLoading && <Loader />}
            {error.msg && <span className="form__error">{error.msg}</span>}

            <input
              {...baseInputProps[inputName]}
              onBlur={handleBlur}
              defaultValue={defaultValue}
              className="form__input  pt-2.5 mb-5"
            />

            <div className="flex flex-col  gap-2 justify-evenly sm:flex-row sm:gap-0">
              <button onClick={hideForm} className="button hover text-white bg-red-100">
                Cancel
              </button>
              <button onClick={submitForm} className="button hover text-white bg-cyanGreen-200">
                Edit Blog
              </button>{' '}
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default EditUserDetailForm;
