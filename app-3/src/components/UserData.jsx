export default function UserData({ data }) {
  return (
    <div>
      <h4>
        <b>Name:</b> <span>{data?.name}</span>
      </h4>
      <h4>
        <b>Email:</b> <span>{data?.email}</span>
      </h4>
      <h4>
        <b>Phone:</b> <span>{data?.phone}</span>
      </h4>
    </div>
  );
}
