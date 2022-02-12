import { useUser } from '@auth0/nextjs-auth0';
import ErrorAlert from '../components/error';
import Spinner from '../components/spinner';

const Profile = () => {
  const { user, error, isLoading } = useUser();
  const userData = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  return user ? (
    <div>
      <img
        src={user.picture ?? 'http://placekitten.com/200/300'}
        alt={user.name ?? ''}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <></>
  );
};

export default Profile;
