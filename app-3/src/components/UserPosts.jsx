import { getUserPosts } from "@/fetchApi/getUserPosts";

export default async function UserPosts({ userId }) {
  const userPosts = await getUserPosts(userId);

  return (
    <>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h4>
            <b>User ID: </b>
            {post.userId}
          </h4>
          <p>
            <b>User Post: </b>
            {post.title}
          </p>
        </div>
      ))}
    </>
  );
}
