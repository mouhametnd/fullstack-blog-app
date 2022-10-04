import './form.scss'
import { useDispatch } from 'react-redux';
import { API_BASE_URL } from '../../constants';
import useUser from '../../hooks/userUser';
import { userSliceActions } from '../../store/slices/user/userSlice';
import EditUserDetailForm from './EditUserDetailForm';
const { updateUserProp } = userSliceActions;
const EditUserName = () => {
  const dispatch = useDispatch();
  const { userToken, name } = useUser();

  const successCb = ({ newName }: { newName: string }) =>
    dispatch(updateUserProp({ newValue: newName, propName: 'name' }));

  return (
    <EditUserDetailForm
      defaultValue={name}
      formTitle="name"
      userToken={userToken}
      inputName="name"
      successCb={successCb}
      reqEndpoint={`${API_BASE_URL}/user/update/name`}
    />
  );
};

export default EditUserName;
