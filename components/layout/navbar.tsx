import Link from 'next/link';

const Navbar = () => {
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
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            className="btn btn-ghost btn-sm rounded-btn"
            href="/api/auth/login"
          >
            Login
          </a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            className="btn btn-ghost btn-sm rounded-btn"
            href="/api/auth/logout"
          >
            Logout
          </a>
        </div>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1 mr-2">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
