import { API_BASE_URL, baseFormValues } from '../../constants/globalConstants';
import { IUseFormProps } from '../../hooks/useForm/useFormTypes';

export const logInUseFormProps: IUseFormProps = {
  reqEndpoint: `${API_BASE_URL}/log-in`,
  httpMethod: 'post',
  formValues: { password: { ...baseFormValues.password }, username: { ...baseFormValues.username } },
};
