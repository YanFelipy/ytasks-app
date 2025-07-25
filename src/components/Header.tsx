import Logo from "../assets/Sem título-1.png";

import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-white min-h-20 shadow-md">

    <nav className="flex items-center justify-between w-3/6">
      <div className="w-15">
          <Link to="/">
        <img src={Logo} />
          </Link>
      </div>

 <ul className="flex font-sans row items-center justify-evenly">

          <Link to="/">
          <li className=" flex items-center text-black">
<i className="bi bi-house-fill mx-2 text-2xl text-gray-800"></i>
      
          </li>
          
          </Link>

          <Link to="/about">
          <li className=" flex  items-center  text-black">
         <i className="bi bi-info-square-fill  text-2xl text-gray-800" ></i>

          </li>
                    </Link>
        </ul>


      </nav>

      
       
      </header>
  );
};

export default Header;
