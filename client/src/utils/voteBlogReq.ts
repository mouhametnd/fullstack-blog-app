import axios from 'axios';
import { API_BASE_URL } from '../constants/globalConstants';
import useUser from '../hooks/userUser';
import { IBlog } from '../types/types';

const voteBlogReq = async ({ blogId }: { blogId: IBlog['_id'] }) => {
  const { user } = useUser();
  const { userToken } = user;

    const urlEndp = `${API_BASE_URL}/blogs/vote/${blogId}`;
    const headers = { Authorization: userToken };
    axios.patch(urlEndp, { headers });
};


export default voteBlogReq