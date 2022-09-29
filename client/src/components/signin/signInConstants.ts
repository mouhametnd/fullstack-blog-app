import { API_BASE_URL, baseFormValues } from '../../constants/globalConstants';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';
import { TUserSlice } from '../../store/slices/user/userSliceTypes';

const { name, password, username } = baseFormValues;
export const signInUseFormProps: IUseFormProps = {
  reqEndpoint: `${API_BASE_URL}/sign-in`,
  httpMethod: 'post',
  formValues: { name, username, password },
};

export type TSignInResponse = { error: string; result: null } | { result: TUserSlice; error: false };
