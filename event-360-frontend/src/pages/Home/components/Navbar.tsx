import Container from "@/components/Container";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <header className="my-6 absolute top-0 left-0 h-10 w-full z-10">
      <Container>
        <nav className="flex justify-between items-center">
          <h4 className="text-lg md:text-3xl font-extrabold leading-tight">
            Event <span className="text-primary">360</span>
          </h4>
          <ul className="space-x-2 md:space-x-4 text-sm md:text-base font-semibold">
            <ScrollLink
              to="/"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              className="cursor-pointer"
              to="services"
              smooth={true}
              duration={1000}
            >
              Services
            </ScrollLink>
            <ScrollLink
              className="cursor-pointer"
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </ScrollLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
