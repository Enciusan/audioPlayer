import React from "react";
import { Disc3, FolderPlus, Home } from "lucide-react";
import { Button } from "../../libComponents/Button";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  {
    id: "1",
    name: "Create",
    icon: <FolderPlus />,
    route: "/create",
  },
  {
    id: "2",
    name: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    id: "3",
    name: "Player",
    icon: <Disc3 />,
    route: "/player",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="h-14 flex flex-row justify-around items-center text-lg shadow-teal-400 rounded-t-lg bg-[#1e1e1e]/30 backdrop-blur-lg">
      {menuItems.map((item) => {
        return (
          <NavLink to={item.route} className={({ isActive }) => (isActive ? "bg-teal-600 rounded-full py-1" : "")}>
            <Button key={item.id} className="flex flex-col bg-transparent">
              <i className="w-6 h-6">{item.icon}</i>
              {item.name}
            </Button>
          </NavLink>
        );
      })}

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
