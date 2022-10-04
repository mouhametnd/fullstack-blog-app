import React from 'react';
import { useDispatch } from 'react-redux';
import { API_BASE_URL } from '../../constants/globalConstants';
import useUser from '../../hooks/userUser';
import { userSliceActions } from '../../store/slices/user/userSlice';
import EditUserDetailForm from './EditUserDetailForm';
const { updateUserProp } = userSliceActions;
const EditUserName = () => {
  const dispatch = useDispatch();
  const { user } = useUser();
  const { userToken, name } = user;

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
