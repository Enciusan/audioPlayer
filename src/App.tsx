import React from "react";
import "./App.css";
import { AuthenticatedRoutesWrapper, DappProvider } from "@multiversx/sdk-dapp/wrappers";
import { NotificationModal, SignTransactionsModals, TransactionsToastList } from "@multiversx/sdk-dapp/UI";
import { apiTimeout, walletConnectV2ProjectId } from "./config";
import { Navbar } from "./components/Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";
import { Unlock } from "./pages/Unlock/Unlock";
import { Disc3, FileAudio, FolderPlus } from "lucide-react";
import { Create } from "./pages/Create/Create";
import { Player } from "./pages/Player/Player";
import { Browse } from "./pages/Browse/Browse";

const routes = [
  {
    path: "/create",
    title: "Create",
    component: Create,
    authenticatedRoute: false,
  },
  {
    path: "/player",
    title: "Player",
    component: Player,
    authenticatedRoute: true,
  },
  {
    path: "/",
    title: "Home",
    component: Home,
    authenticatedRoute: false,
  },
  {
    path: "/browse",
    title: "Browse",
    component: Browse,
    authenticatedRoute: true,
  },
];

function App() {
  return (
    <DappProvider
      environment={"devnet"}
      customNetworkConfig={{
        name: "customConfig",
        apiTimeout,
        walletConnectV2ProjectId,
      }}>
      <TransactionsToastList successfulToastLifetime={1000} customToastClassName="absolute" />
      <NotificationModal />
      <SignTransactionsModals className="custom-class-for-modals" />
      <div className="">
        <div className="backgroundCircle"></div>
        <div className="backgroundCircle1"></div>
        <div className="flex flex-col min-h-[100svh] text-white backdrop-blur-xl">
          <Navbar />
          <Content>
            <AuthenticatedRoutesWrapper routes={routes} unlockRoute="/unlock">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/unlock" element={<Unlock />}></Route>
                <Route path="/browse" element={<Browse />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/player" element={<Player />}></Route>
              </Routes>
            </AuthenticatedRoutesWrapper>
          </Content>
          <Footer />
        </div>
      </div>
    </DappProvider>
  );
}

export default App;
