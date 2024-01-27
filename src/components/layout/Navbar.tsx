import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const header = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.7, duration: 0.8 } },
};

const Navbar = () => {
  return (
    <motion.header
      variants={header}
      initial="initial"
      animate="animate"
      className="h-16 fixed bg-white z-[999] w-full"
    >
      <nav className="w-full h-full max-w-[1230px] mx-auto px-[20px] flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>Login</Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
