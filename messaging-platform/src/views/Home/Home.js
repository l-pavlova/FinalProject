import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import UserList from '../User/UserList';

const Home = ({

}) => {

  useEffect(() => {
    //requester(api.getChat('newChat')).get();
  }, [])

  const { currentUser } = useAuth();

  return (
    <div className="Home">
      <UserList />
      <header className="Home-header">
      </header>
    </div>
  );
}

export default Home;
