export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // if (!res.ok) throw new Error("Failed To Fetch Users");

  if (!res.ok) return undefined; // to make not found page

  return res.json();
};
