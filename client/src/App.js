import Header from './components/header/index';
import React, { useEffect, useState } from 'react'
import { fetchProfileAndRepos } from './utils';

function App() {
  const [data, setData] = useState();

  const { userInfo: { avatarUrl } } = data;
  useEffect(() => {
    fetchProfileAndRepos()
    .then(data => {
        setData(data)
    })
    .catch(error => {
        alert("Check internet connection or refresh page")
    });
  }, [])
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
