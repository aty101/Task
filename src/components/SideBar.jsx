import { Link } from "react-router-dom";
export function SideBar({ closeSideBar }) {
  return (
    <div className="background" onScroll={closeSideBar} onClick={closeSideBar}>
      <div className="sideBar" onClick={(event)=>{ event.stopPropagation();}}>
        <div onClick={closeSideBar} className="closeButton">✖</div>
        <ul>
          <li >
            <Link  className="navButtons" to={"/"}>
              Home
            </Link>
          </li>
          <li >
            <Link replace  className="navButtons" to={"/new"}>
              New
            </Link>
          </li>
          <li >
            <Link replace  className="navButtons" to={"/Popular"}>
              Popular
            </Link>
          </li>
          <li >
            <Link  replace className="navButtons" to={"/Trending"}>
              Trending
            </Link>
          </li>
          <li >
            <Link  replace className="navButtons" to={"/Categories"}>
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
