import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <GraduationCap size={32} className="text-blue-600" />
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Campus Connect
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/events" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Events
            </Link>

            <Link to="/notices" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Notices
            </Link>

            <Link to="/users" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Users
            </Link>
          </div>

          {/* <div className="hidden md:block"> */}
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
              Register
            </Link>
          {/* </div> */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/events" className="text-gray-700 hover:text-blue-600 font-medium">
                Events
              </Link>

              <Link to="/notices" className="text-gray-700 hover:text-blue-600 font-medium">

                Notices
              </Link>

              <Link to="/users" className="text-gray-700 hover:text-blue-600 font-medium">
                Users
              </Link>

              <Link to="/register" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;