import React from 'react';
import useUser from '../../hooks/userUser';
import dateFormater from '../../utils/dateParser';
import EditUserName from './EditUserName';
import EditUserUsername from './EditUserUsername';
import UserBlogs from './userBlogs';

const Dashboard = () => {
  const { user } = useUser();
  const { _id, blogs, latestUpdate, name, userToken, username } = user;

  // todo create scss file

  return (
    <section>
      <article className='w-max m-auto mt-8'>
        <div className='flex gap-2 flex-col'>

        <div className='flex justify-between'>
          <span className='text-lg font-medium text-cyanGreen-100'>{name}</span>

          <EditUserName/>
        </div>

        <div className='flex justify-between'>
          <span className='text-lg font-medium text-cyanGreen-100'>{username}</span>
          <EditUserUsername/>
        </div>

        </div>


        <div>
          <span className="blog__date">
            Last Update
            <time className="blog__time">{dateFormater(latestUpdate)}</time>

            <button className='button bg-cyanGreen-100 hover'>Create Blog</button>
          </span>
        </div>
      </article>


      <UserBlogs />
    </section>
  );
};

export default Dashboard;
