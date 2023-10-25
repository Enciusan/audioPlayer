import React from "react";
import { Disc3, FileAudio, FolderPlus, Home, LogIn, LogOut } from "lucide-react";
import { Button } from "../../libComponents/Button";
import { NavLink } from "react-router-dom";
import { useGetAccountInfo, useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks";
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
    <footer className="h-20 flex flex-row justify-around items-center text-lg shadow-teal-400 rounded-t-lg bg-[#1e1e1e]/30 backdrop-blur-lg">
      {menuItems.map((item) => {
        return (
          <NavLink
            to={item.route}
            className={({ isActive }) => (isActive ? "bg-teal-600 rounded-full py-3" : "")}
            key={item.id}>
            {/*{!item.needLogin ? (*/}
            <Button className="flex flex-col bg-transparent">
              <i className="w-6 h-6">{item.icon}</i>
              {item.name}
            </Button>
          </NavLink>
        );
      })}
      {isLoggedIn ? (
        <Button className="flex flex-col bg-transparent" onClick={() => logout("/")}>
          <i className="w-6 h-6">
            <LogOut className="w-6 h-6" />
          </i>
          Log out
        </Button>
      ) : (
        <NavLink to="/unlock" className={({ isActive }) => (isActive ? "bg-teal-500 rounded-full py-3" : "")}>
          <Button className="flex flex-col bg-transparent">
            <i className="w-6 h-6">
              <LogIn className="w-6 h-6" />
            </i>
            Log in
          </Button>
        </NavLink>
      )}
      {/*<a*/}
      {/*  {...{*/}
      {/*    target: "_blank",*/}
      {/*  }}*/}
      {/*  className="flex items-center font-semibold"*/}
      {/*  href="https://itheum.com">*/}
      {/*  Made with <Heart className="mx-1" />*/}
      {/*</a>*/}
    </footer>
  );
};
