import { useEffect, useState } from 'react';
import Header from './components/header';
import Contents from './components/contents';
import { fetchProfileAndRepos } from './utils';

function App() {
  const [data, setData] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  useEffect(() => {
    fetchProfileAndRepos()
    .then(data => {
        console.log(data);
        setData(data)
        setAvatarUrl(data.userInfo.avatarUrl)
    })
    .catch(error => {
      console.log({error})
        alert("Check internet connection or refresh page")
    });
  }, []);

  return (
    <div className="App">
      {
        avatarUrl && <Header avatarUrl={avatarUrl} />
      }
      {
        data && <Contents data={data} />
      }
    </div>
  );
}

export default App;
