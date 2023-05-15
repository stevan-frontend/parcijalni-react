import { useState } from "react";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();

      setUserData(userData);
      setRepos(reposData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <body>
      <UserForm
        username={username}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <UserInfo userData={userData} repos={repos} />
    </body>
  );
}

export default App;
