import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-[1230px] mx-auto px-[20px] flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>Login</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
