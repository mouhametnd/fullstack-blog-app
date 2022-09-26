import { BASE_API_ENDP } from '../../constants/globalConstants';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import { TUserSlice } from '../../store/slices/user/userSliceTypes';

export const signInUseFormProps: IUseFormProps = {
  reqEndpoint: `${BASE_API_ENDP}/sign-in`,
  httpMethod: 'post',
  formValues: {
    name: {
      name: 'name',
      regex: /[a-zA-Z]{3,}/,
      value: '',
    },

    username: {
      name: 'username',
      regex: /^[A-Za-z][A-Za-z0-9_]{7,}$/,
      value: '',
    },
    password: {
      name: 'password',
      regex: /^[A-Za-z]([A-Za-z0-9_]){7,}$/,
      value: '',
    },
  },
};

export type TSignInResponse = { error: string; result: null } | { result: TUserSlice; error: false };
