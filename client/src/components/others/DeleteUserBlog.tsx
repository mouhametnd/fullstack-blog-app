import axios from 'axios';
import React, { useState } from 'react';
import { API_BASE_URL } from '../../constants/globalConstants';
import useUser from '../../hooks/userUser';
import { IBlog } from '../../types/types';
import TrashIcon from '../icons/TrashIcon';

interface IProps {
  blog: IBlog;
}

const DeleteUserBlog = ({ blog }: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { user } = useUser();
  const { userToken } = user;
  const { title, _id } = blog;

  const deleteBlog = () => {
    axios.delete(`${API_BASE_URL}/blogs/delete/${_id}`, { headers: { Authorization: userToken } });
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="w-max absolute right-7">
        <TrashIcon />
      </button>

      {showModal && (
        <section className="fixed z-30 top-0 left-0 flex w-full h-screen bg-cyanGreen-100/10">
          <div className=" m-auto  w-80 min-h-[200px] p-6 rounded-lg  bg-white-100 flex flex-col gap-3 bg-white ">
            <h2 className="text-black-0 font-Sec text-xl font-semibold text-center tracking-wide text-gray-100">
              Delete this blog
            </h2>
            <p className="text-gray-100 font-normal text-sm text-center">
              Are you sure you want to delete the <span className="font-semibold text-cyanGreen-100"> "{title}" </span>
              blog and its contents? This action cannot be reversed.
            </p>

            <div className="flex flex-row justify-evenly">
              <button onClick={() => setShowModal(false)} className="button hover text-white bg-red-100">
                Cancel
              </button>
              <button onClick={deleteBlog} className="button hover text-white bg-cyanGreen-100">
                Delete
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DeleteUserBlog;
