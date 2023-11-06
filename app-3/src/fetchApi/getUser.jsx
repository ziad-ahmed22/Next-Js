export const getUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  // if (!res.ok) throw new Error("Failed To Fetch User");

  if (!res.ok) return undefined; // to make not found page

  return res.json();
};
