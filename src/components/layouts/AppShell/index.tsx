import React from "react";
import Header from "../GlobalComponents/Header";
import Footer from "../GlobalComponents/Footer";

type AppShellProps = {
  children: React.ReactNode;
};

export const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
};
