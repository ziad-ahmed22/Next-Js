const UserDetails = async ({ userId }) => {
  // Slow Fetching Data
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();

  return (
    <div>
      <h3 style={{ marginBottom: "15px" }}>- {user.name}</h3>
      <h3 style={{ marginBottom: "15px" }}>- {user.email}</h3>
      <h3 style={{ marginBottom: "15px" }}>- {user.phone}</h3>
      <h3 style={{ marginBottom: "15px" }}>- {user.address?.street}</h3>
    </div>
  );
};

export default UserDetails;
