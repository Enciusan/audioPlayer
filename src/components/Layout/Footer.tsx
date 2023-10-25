import React, { Fragment } from "react";
import { Disc3, FileAudio, FolderPlus, Heart, Home, LogIn, LogOut } from "lucide-react";
import { Button } from "../../libComponents/Button";
import { NavLink } from "react-router-dom";
import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks";
import { logout } from "@multiversx/sdk-dapp/utils";

const menuItems = [
  {
    id: "1",
    name: "Create",
    icon: <FolderPlus />,
    route: "/create",
  },
  {
    id: "2",
    name: "Player",
    icon: <Disc3 />,
    route: "/player",
  },
  {
    id: "3",
    name: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    id: "4",
    name: "Browse",
    icon: <FileAudio />,
    route: "/browse",
  },
];

export const Footer: React.FC = () => {
  const isLoggedIn = useGetIsLoggedIn();

  return (
    <footer className="h-16 flex flex-row justify-around items-center text-lg shadow-teal-400 rounded-t-lg bg-[#1e1e1e]/30 xl:bg-transparent backdrop-blur-lg">
      <div className="xl:hidden flex justify-around w-full">
        {menuItems.map((item) => {
          return (
            <NavLink to={item.route} key={item.id}>
              {({ isActive }) => (
                <Button className="flex flex-col bg-transparent">
                  <i className={isActive ? "text-teal-500 w-6 h-6" : "text-muted w-6 h-6"}>{item.icon}</i>
                  <p className={isActive ? "text-teal-500" : "text-muted"}>{item.name}</p>
                </Button>
              )}
            </NavLink>
          );
        })}
        {isLoggedIn ? (
          <Button className="flex flex-col bg-transparent" onClick={() => logout("/")}>
            <i className="w-6 h-6">
              <LogOut />
            </i>
            <p>Log out</p>
          </Button>
        ) : (
          <NavLink to="/unlock">
            {({ isActive }) => (
              <Button className="flex flex-col bg-transparent">
                <i className={isActive ? "text-teal-500 w-6 h-6" : "text-muted w-6 h-6"}>
                  <LogIn />
                </i>
                <p className={isActive ? "text-teal-500" : "text-muted"}>Log in</p>
              </Button>
            )}
          </NavLink>
        )}
      </div>
      <a className="flex items-center font-semibold xl:flex hidden">
        Made with <Heart className="mx-1" /> by Enciu
      </a>
    </footer>
  );
};
