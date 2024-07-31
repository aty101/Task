import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
export function NavBar({ setIsOpen }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth > 800) {
    return (
      <nav className="navBar">
        <ul>
          <li>
            <Link className="navButtons" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navButtons" to={"/new"}>
              New
            </Link>
          </li>
          <li>
            <Link className="navButtons" to={"/Popular"}>
              Popular
            </Link>
          </li>
          <li>
            <Link className="navButtons" to={"/Trending"}>
              Trending
            </Link>
          </li>
          <li>
            <Link className="navButtons" to={"/Categories"}>
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <>
        {" "}
        <div onClick={setIsOpen} className="sideBarButton">
          ≡
        </div>
      </>
    );
  }
}
