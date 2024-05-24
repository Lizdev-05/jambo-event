import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Jambo Events</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/">
              <a className="hover:text-yellow-500">Dashboard</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/events">
              <a className="hover:text-yellow-500">Events</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/vendors">
              <a className="hover:text-yellow-500">Vendors</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/export">
              <a className="hover:text-yellow-500">Export</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/audiences">
              <a className="hover:text-yellow-500">Audiences</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
