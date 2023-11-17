import { ReactNode } from "react";
import { NavBar } from "./NavBar";

export const LayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="flexContainer">
        <div className="left-sidebar">
          <img src="src\img\left-sidebar.png" alt="cartoon-collage" />
        </div>
        <main className="container-body flex1">{children}</main>
        <div className="right-sidebar">
          <img src="src\img\right-sidebar1.png" alt="anime-collage" />
        </div>
      </div>
    </>
  );
};
