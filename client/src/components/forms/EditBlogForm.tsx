import './form.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_BASE_URL, baseFormValues, baseInputProps } from '../../constants';
import useForm from '../../hooks/useForm';
import useUser from '../../hooks/userUser';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { IBlog, IUseFormProps } from '../../types';
import Loader from '../loader/Loader';
import PenIcon from '../icons/PenIcon';

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
const { editBlog } = blogsSliceActions;

const EditBlogForm = ({ blog, reqEndpoint }: IProps) => {
  const dispatch = useDispatch();
  const { title, description } = blog;
  const { userToken } = useUser();
  useFormArg.headers['Authorization'] = userToken;
  useFormArg.reqEndpoint = reqEndpoint;

  const [showForm, setShowForm] = useState<boolean>(false);
  const { error, isLoading, sendForm, setFormValue, resetFormState, getFormValues } = useForm(useFormArg);

  const hideForm = (e: FormEvent) => {
    e.preventDefault();
    resetFormState();
    setShowForm(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { result } = await sendForm();
    if (!result) return;

    const { title, description } = getFormValues();
    dispatch(editBlog({ blogId: blog._id, blogsName: 'userBlogs', newDescription: description!, newTitle: title! }));
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

  if (!showForm) {
    return (
      <button onClick={() => setShowForm(true)} className="w-max absolute right-16 ">
        <PenIcon />
      </button>
    );
  }

  return (
    <form className="flex flex-col gap-4 mb-6 mt-3 ">
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
          className="form__textarea form__input"
          defaultValue={description}
          onBlur={handleBlur<HTMLTextAreaElement>(baseInputProps.description.name)}
        />
      </div>

      <div className="form__cont-buttons">
        <button onClick={hideForm} className="btn btn-cancel hover">
          Cancel
        </button>
        <button onClick={handleSubmit} className="btn btn-submit hover">
          Edit Blog
        </button>
      </div>
    </form>
  );
};

export default EditBlogForm;
