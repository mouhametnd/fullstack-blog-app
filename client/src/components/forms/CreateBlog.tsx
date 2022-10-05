import './form.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_BASE_URL, baseFormValues, baseInputProps } from '../../constants';
import useForm from '../../hooks/useForm';
import useUser from '../../hooks/userUser';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import Loader from '../loader/Loader';
import { IUseFormProps } from '../../types';

const useFormArg: IUseFormProps = {
  httpMethod: 'post',
  reqEndpoint: `${API_BASE_URL}/blogs/add`,
  formValues: { title: baseFormValues.title, description: baseFormValues.description },
  headers: {},
};

const { addBlog, resetBlogsState } = blogsSliceActions;

const CreateBlog = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const { userToken } = useUser();
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
    
    dispatch(addBlog(result));
    dispatch(resetBlogsState())
    hideForm(e);
  };

  return (
    <>
      <button onClick={() => setShowForm(true)} className="btn btn-submit hover my-1  block mx-auto">
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
            <textarea
              {...baseInputProps.description}
              onBlur={handleBlur(baseInputProps.description.name)}
              className="form__input form__textarea"
            ></textarea>

            <div className="form__cont-buttons">
              <button onClick={hideForm} className="btn btn-cancel hover ">
                Cancel
              </button>
              <button onClick={submitForm} className="btn btn-submit hover ">
                Create Blog
              </button>{' '}
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default CreateBlog;
