import Link from "next/link";
import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <div className="flex justify-between bg-white px-4">
      <div className="flex items-center ">
        <div
          className="flex items-center w-[50px] h-[50px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(favicon.ico)",
          }}
        />
      </div>
      <div className="flex flex-grow">
        <Menu />
        <div className="flex items-center">
          <div className="rounded transition hover:bg-sky-600 bg-sky-500 py-2 px-3 text-white capitalize font-medium ">
            <Link href="#resume">Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
