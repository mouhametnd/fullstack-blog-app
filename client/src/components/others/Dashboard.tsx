import React from 'react';
import useUser from '../../hooks/userUser';
import dateFormater from '../../utils/dateParser';
import CreateBlog from './CreateBlog';
import EditUserName from './EditUserName';
import EditUserUsername from './EditUserUsername';
import UserBlogs from './userBlogs';

const Dashboard = () => {
  const { user } = useUser();
  const { latestUpdate, name, username } = user;
  // todo create scss file

  return (
    <>
      <section className="blogs-wrapper">
        <article className="max-w-sm  p-5  custom-shadow rounded-md mt-8 bg-white border-t-2 border-red-100 mx-auto w-full">
          <div className="flex gap-2 flex-col">
            <div className="flex justify-between">
              <span className="text-lg font-medium text-cyanGreen-100">{name}</span>

              <EditUserName />
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-medium text-cyanGreen-100">{username}</span>
              <EditUserUsername />
            </div>
          </div>

          <div>
            <div className="blog__date flex justify-between py-2">
              <span>Last Update</span>
              <time className="blog__time">{dateFormater(latestUpdate)}</time>
            </div>
          </div>
          <CreateBlog />
        </article>
      </section>
      <UserBlogs />
    </>
  );
};

export default Dashboard;
