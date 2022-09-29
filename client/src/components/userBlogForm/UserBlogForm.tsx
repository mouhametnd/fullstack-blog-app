import React, { ChangeEvent } from 'react';
import { API_BASE_URL, baseFormValues, baseInputProps } from '../../constants/globalConstants';
import useForm from '../../hooks/useForm/useForm';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import useUser from '../../hooks/userUser';
import { IBlog } from '../../types/types';

interface IProps {
  blogId: IBlog['_id'];
  shouldShowUp: boolean;
  successCb: () => unknown;
}

const { description, title } = baseFormValues;
const useFormArg: IUseFormProps = {
  httpMethod: 'patch',
  reqEndpoint: `${API_BASE_URL}/blogs/update`,
  formValues: { title, description },
};

const UserBlogForm = ({ blogId, shouldShowUp, successCb }: IProps) => {
  const { user } = useUser();
  const { userToken } = user;
  useFormArg.headers = { Authorization: userToken };
  useFormArg.reqEndpoint = useFormArg.reqEndpoint + `/${blogId}`;

  const { error, sendForm, setFormValue } = useForm(useFormArg);

  const handleBlur = (name: string) => (e: ChangeEvent<HTMLInputElement>) => setFormValue(name, e.target.value);


  return (
    <form onSubmit={() => sendForm(successCb)}>
      {error.msg && <span className="form__error">{error.msg}</span>}

      <div>
        <input className="form__input" {...baseInputProps.title} onBlur={handleBlur(baseInputProps.name.name)} />
        <input className="form__input" {...baseInputProps.description} onBlur={handleBlur(baseInputProps.name.name)} />
      </div>
    </form>
  );
};

export default UserBlogForm;
