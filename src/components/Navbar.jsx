import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">JobFinder</Link>
        <div className="space-x-10">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/jobs" className="hover:underline">Jobs</Link>
          <Link to="/create" className="hover:underline">Post Job</Link>
        </div>
      </div>
    </nav>
  );
}
