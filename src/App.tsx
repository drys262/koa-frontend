import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl =
      process.env.REACT_APP_ENVIRONMENT === 'development'
        ? 'http://api-dev.hov90901.tk/users'
        : 'http://api-qa.hov90901.tk/users';
    axios.get(apiUrl).then(response => setUsers(response.data));
  }, []);

  return (
    <>
      <h2>Basic CI/CD React Frontend</h2>
      {users &&
        users.map((user: any) => (
          <li key={user.id}>
            <a href="###">{user.name}</a>
          </li>
        ))}
    </>
  );
};

export default App;
