import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import requester from '../../services/requester';

const Home = ({

}) => {

  useEffect(() => {
    //requester(api.getChat('newChat')).get();
  }, [])

  const { currentUser } = useAuth();

  return (
    <div className="Home">
      <header className="Home-header">
      </header>
    </div>
  );
}

export default Home;
