import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { API_BASE_URL, baseFormValues, baseInputProps } from '../../constants/globalConstants';
import useForm from '../../hooks/useForm/useForm';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import useUser from '../../hooks/userUser';
import { IBlog } from '../../types/types';
import Loader from '../loader/Loader';
import PenIcon from '../others/PenIcon';

interface IProps {
  blog: IBlog;
  reqEndpoint: string;
}
const { description, title } = baseFormValues;
const useFormArg: IUseFormProps = {
  httpMethod: 'patch',
  reqEndpoint: `${API_BASE_URL}/blogs/update`,
  formValues: { title, description },
  headers: {},
};
// todo it will render false to not show the form
// todo it will be mounted and unmounted
const UserBlogForm = ({ blog, reqEndpoint }: IProps) => {
  const { title, description } = blog;
  const { user } = useUser();
  const { userToken } = user;
  useFormArg.headers['Authorization'] = userToken;
  useFormArg.reqEndpoint = reqEndpoint;

  const [showForm, setShpwForm] = useState<boolean>(false);
  const { error, isLoading, sendForm, setFormValue, resetFormState } = useForm(useFormArg);

  const hideForm = (e: FormEvent) => {
    e.preventDefault();
    resetFormState();
    setShpwForm(false);
  };

  const editBlog = async (e: FormEvent) => {
    e.preventDefault();
    const { result } = await sendForm();
    if (!result) return;
    // todo setAction
    hideForm(e);
  };

  useEffect(() => {
    if (!showForm) return;

    setFormValue(baseInputProps.title.name, title);
    setFormValue(baseInputProps.description.name, description);
  }, [showForm]);

  function handleBlur<K extends HTMLInputElement | HTMLTextAreaElement>(name: string) {
    return (e: ChangeEvent<K>) => setFormValue(name, e.target.value);
  }

  if (!showForm)
    return (
      <button onClick={() => setShpwForm(true)} className="absolute right-7 ">
        <PenIcon />
      </button>
    );

  return (
    <form className="flex flex-col gap-4 mb-6 ">
      {isLoading && <Loader />}
      {error.msg && <span className="form__error">{error.msg}</span>}

      <div className="flex flex-col gap-2 justify-evenly ">
        <input
          {...baseInputProps.title}
          defaultValue={title}
          className="form__input bg-transparent"
          onBlur={handleBlur<HTMLInputElement>(baseInputProps.title.name)}
        />
        <textarea
          {...baseInputProps.description}
          className="form__input bg-transparent h-20 resize-none"
          defaultValue={description}
          onBlur={handleBlur<HTMLTextAreaElement>(baseInputProps.description.name)}
        />
      </div>

      <div className="flex flex-col  gap-2 justify-evenly sm:flex-row sm:gap-0">
        <button onClick={hideForm} className="button text-white bg-red-100">
          Cancel
        </button>
        <button onClick={editBlog} className="button text-white bg-cyanGreen-200">
          Edit Blog
        </button>{' '}
      </div>
    </form>
  );
};

export default UserBlogForm;
