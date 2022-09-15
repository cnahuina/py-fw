import React from "react";
import { Header } from "./shared/Header"
import { NavBottomBar } from "./shared/NavBottomBar"

export const Layout = ({ children }) => {
 
    return (
      <div className="content">
        <Header />
        <main>{children}</main>
        <NavBottomBar />
      </div>
    );
  };
  