export const metadata = {
  title: "Posts Details",
};

const PostDetailsPage = (props) => {
  console.log(props); // { params: { postId: '1' }, searchParams: {} }

  return (
    <div>
      <h1>
        PostDetailsPage
        <span> #{props.params.postId}</span>
      </h1>
    </div>
  );
};

export default PostDetailsPage;
