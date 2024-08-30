const Profile = ({ name, tag, location, image, status }) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />

        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>{status}</span>
          <span>{status}</span>
        </li>
        <li>
          <span>{status}</span>
          <span>{status}</span>
        </li>
        <li>
          <span>{status}</span>
          <span>{status}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
