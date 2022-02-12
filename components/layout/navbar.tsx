import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import ErrorAlert from '../error';
import Spinner from '../spinner';

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
          Auth0 Authorization Management
        </span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          {user ? (
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a
              className="btn btn-ghost btn-sm rounded-btn"
              href="/api/auth/logout"
            >
              Logout
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a
              className="btn btn-ghost btn-sm rounded-btn"
              href="/api/auth/login"
            >
              Login
            </a>
          )}
        </div>
      </div>
      {user ? (
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1 mr-2">
              <Link href="/profile">
                <a>
                  <img
                    src={user.picture ?? 'http://placekitten.com/200/300'}
                    alt={user.name ?? ''}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
