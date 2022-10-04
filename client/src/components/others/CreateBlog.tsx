import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_BASE_URL, baseFormValues, baseInputProps } from '../../constants/globalConstants';
import useForm from '../../hooks/useForm/useForm';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import useUser from '../../hooks/userUser';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import Loader from '../loader/Loader';

const useFormArg: IUseFormProps = {
  httpMethod: 'post',
  reqEndpoint: `${API_BASE_URL}/blogs/add`,
  formValues: { title : baseFormValues.title , description: baseFormValues.description },
  headers: {},
};

const {addBlog}=blogsSliceActions

const CreateBlog = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const { user } = useUser();
  const { userToken } = user;
  useFormArg.headers = { Authorization: userToken };

  const { error, isLoading, sendForm, setFormValue, resetFormState } = useForm(useFormArg);

  function handleBlur<K extends HTMLInputElement | HTMLTextAreaElement>(name: string) {
    return (e: ChangeEvent<K>) => setFormValue(name, e.target.value);
  }

  const hideForm = (e: FormEvent) => {
    e.preventDefault();
    resetFormState();
    setShowForm(false);
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const { result } = await sendForm();
    if (!result) return;

    console.log(result)
    dispatch(addBlog(result));
    hideForm(e);
  };

  return (
    <>
      <button onClick={() => setShowForm(true)}  className='button bg-cyanGreen-100 hover text-white my-1  block mx-auto' >
        Create blog
      </button>

      {showForm && (
        <section className="fixed z-30 top-0 left-0 flex w-full h-screen bg-cyanGreen-100/10">
          <form className="m-auto  w-80 min-h-[200px] p-6 rounded-lg  bg-white-100 flex flex-col gap-3 bg-white ">
            <h4 className="font-medium text-cyanGreen-100 text-xl">Create Blog</h4>

            {isLoading && <Loader />}
            {error.msg && <span className="form__error">{error.msg}</span>}

            <input
              {...baseInputProps.title}
              onBlur={handleBlur(baseInputProps.title.name)}
              className="form__input  pt-2.5 mb-5"
            />
            <textarea {...baseInputProps.description} onBlur={handleBlur(baseInputProps.description.name)} className='form__input bg-transparent h-20 resize-none'></textarea>

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

export default CreateBlog;
