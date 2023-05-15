const UserInfo = ({ userData, repos }) => {
  if (!userData) {
    return null;
  }

  return (
    <main>
      <img src={userData.avatar_url} alt="Avatar" />
      <h2>Name: {userData.name}</h2>
      <p>Bio: {userData.bio}</p>
      <p>Location: {userData.location}</p>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default UserInfo;
