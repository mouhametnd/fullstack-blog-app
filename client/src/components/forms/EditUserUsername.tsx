import './form.scss'
import { useDispatch } from 'react-redux';
import { API_BASE_URL } from '../../constants';
import useUser from '../../hooks/userUser';
import { userSliceActions } from '../../store/slices/user/userSlice';
import EditUserDetailForm from './EditUserDetailForm';

const { updateUserProp } = userSliceActions;
const EditUserUsername = () => {
  const dispatch = useDispatch();
  const { userToken, username } = useUser();

  const successCb = ({ newUserToken, newUsername }: { newUserToken: string; newUsername: string }) => {
    dispatch(updateUserProp({ newValue: newUserToken, propName: 'userToken' }));
    dispatch(updateUserProp({ newValue: newUsername, propName: 'username' }));
  };

  return (
    <EditUserDetailForm
      defaultValue={username}
      formTitle="username"
      userToken={userToken}
      inputName="username"
      successCb={successCb}
      reqEndpoint={`${API_BASE_URL}/user/update/username`}
    />
  );
};

export default EditUserUsername;
