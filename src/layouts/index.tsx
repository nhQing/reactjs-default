import React, { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";


export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <Fragment>
      <Navbar />
      <main>
        <div className="p-[330px]">
          {children}</div>
      </main>
      <Footer />
    </Fragment>
  )
}