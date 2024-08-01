import { NavBar } from "./NavBar";
import { PageTitle } from "./PageTitle";
import "../styles/Header.css";
import { useState ,useEffect} from "react";
import { SideBar } from "./SideBar";

export function Header() {
  const [isOpen,setIsOpen] = useState(false)

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setIsOpen(false)
      // You can add more logic here based on the scroll position
      // For example, you can update the state, trigger animations, etc.
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSideBar = () => {
    setIsOpen((val) => !val);
  };
  return (
    <>
    <header className="header">
      <PageTitle></PageTitle>
      <NavBar setIsOpen={handleSideBar}></NavBar>
      
    </header>
    {isOpen &&
    <SideBar closeSideBar={handleSideBar}></SideBar>}
    </>
  );
}

