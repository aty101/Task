import { NavBar } from "./NavBar";
import { PageTitle } from "./PageTitle";
import "../styles/Header.css";
import { useState } from "react";
import { SideBar } from "./SideBar";

export function Header() {
  const [isOpen,setIsOpen] = useState(false)
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

