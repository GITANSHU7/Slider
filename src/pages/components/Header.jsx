import { Button, Navbar } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HeaderTheme } from "../../../Theme/HeaderTheme";

export function Header() {
  return (
    <Navbar fluid rounded theme={HeaderTheme} className="border-b-2">
      <Navbar.Brand>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cover_Corp_horizontal_logo_1.png/1200px-Cover_Corp_horizontal_logo_1.png"
          className="mr-3 "
          alt="Flowbite React Logo"
          width={"120px"}
          height={"120px"}
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="mr-2" outline>
          <FaHeart />{" "}
        </Button>
        <Button className="mr-2" outline>
          {" "}
          <FaUser />{" "}
        </Button>
        <Button outline>
          {" "}
          <FaShoppingCart />{" "}
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="font-extrabold text-xl">
          Shop
        </Navbar.Link>
        <Navbar.Link href="#" className="font-extrabold text-xl">
          Men
        </Navbar.Link>
        <Navbar.Link href="#" active className="font-extrabold text-xl">
          Women
        </Navbar.Link>
        <Navbar.Link href="#" className="font-extrabold text-xl">
          Combos
        </Navbar.Link>
        <Navbar.Link href="#" className="font-extrabold text-xl">
          Joggers
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
