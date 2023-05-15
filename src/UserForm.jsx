const UserForm = ({ username, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={username}
        onChange={onChange}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Get User Data</button>
    </form>
  );
};

export default UserForm;
