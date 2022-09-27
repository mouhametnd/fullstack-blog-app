import { API_BASE_URL, baseFormProps } from '../../constants/globalConstants';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import { TUserSlice } from '../../store/slices/user/userSliceTypes';

export const signInUseFormProps: IUseFormProps = {
  reqEndpoint: `${API_BASE_URL}/sign-in`,
  httpMethod: 'post',
  formValues: {...baseFormProps,},
};

export type TSignInResponse = { error: string; result: null } | { result: TUserSlice; error: false };
