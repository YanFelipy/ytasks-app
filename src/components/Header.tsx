import Logo from "../assets/Sem título-1.png";

import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-evenly bg-gray-100 min-h-20 shadow-md">
      <div className="w-15">
          <Link to="/">
        <img src={Logo} />
          </Link>
      </div>
      <nav className="flex items-center justify-evenly">
        <ul className="flex font-sans row items-center justify-evenly">

          <Link to="/">
          <li className=" flex items-center text-black">
            <svg
              className="mx-2"
              width="20px"
              height="20px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="3"
              stroke="#000000"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M55.5,23.9V53.5a2,2,0,0,1-2,2h-43a2,2,0,0,1-2-2v-43a2,2,0,0,1,2-2H41.64"></path>
                <path d="M19.48,38.77l-.64,5.59a.84.84,0,0,0,.92.93l5.56-.64a.87.87,0,0,0,.5-.24L54.9,15.22a1.66,1.66,0,0,0,0-2.35L51.15,9.1a1.67,1.67,0,0,0-2.36,0L19.71,38.28A.83.83,0,0,0,19.48,38.77Z"></path>
                <line x1="44.87" y1="13.04" x2="50.9" y2="19.24"></line>
              </g>
            </svg>
            Página Inicial
          </li>
          
          </Link>

          <Link to="/about">
          <li className=" flex  items-center  text-black">
            <svg
              className="mx-2"
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 128 128"
              id="Layer_1"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9 s55,24.7,55,55S94.3,119,64,119z"></path>{" "}
                  <rect height="40" width="8" x="60" y="54.5"></rect>{" "}
                  <rect height="8" width="8" x="60" y="35.5"></rect>{" "}
                </g>{" "}
              </g>
            </svg>
            Sobre
          </li>
                    </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
