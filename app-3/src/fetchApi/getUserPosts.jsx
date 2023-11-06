export const getUserPosts = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  // if (!res.ok) throw new Error("Failed To Fetch User Posts");

  if (!res.ok) return undefined; // to make not found page

  return res.json();
};
