import React, { useState } from "react";
import { useGetAccountInfo } from "@multiversx/sdk-dapp/hooks";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const { address } = useGetAccountInfo();
  const isLoggedIn = Boolean(address);
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <nav className="text-white text-xl">
      <div className="flex flex-row justify-left p-12 items-center h-20">
        <Link to={"/"} className="flex flex-row">
          <p className="text-xl text-left font-bold">Music.ITH</p>
        </Link>
        {/*  <div className="flex gap-5">*/}
        {/*    <Link to="/">*/}
        {/*      <button className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl">*/}
        {/*        <Home />*/}
        {/*      </button>*/}
        {/*    </Link>*/}
        {/*    {isLoggedIn ? (*/}
        {/*      <Link to="/wallet">*/}
        {/*        <button className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl">*/}
        {/*          <Wallet />*/}
        {/*        </button>*/}
        {/*      </Link>*/}
        {/*    ) : (*/}
        {/*      <></>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*  {!isLoggedIn ? (*/}
        {/*    <div className="connect-wallet-container">*/}
        {/*      <button*/}
        {/*        className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl"*/}
        {/*        onClick={() => setIsShown(!isShown)}>*/}
        {/*        <LogIn />*/}
        {/*      </button>*/}
        {/*      <ConnetionButtons isShown={isShown} />*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    <div className="flex flex-row">*/}
        {/*      <button*/}
        {/*        className="bg-transparent backdrop-blur border-0 shadow-inner shadow-white hover:shadow-slate-400 p-2 rounded-xl"*/}
        {/*        onClick={() => logout("/")}>*/}
        {/*        <LogOut />*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  )}*/}
      </div>
    </nav>
  );
};
