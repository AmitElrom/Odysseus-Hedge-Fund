import React from "react";

import NavigationBar from "../navigation bar/NavigationBar";

const Layout = ({ children, className, dir }) => {
  return (
    <div dir={dir}>
      <NavigationBar />
      <main className={className}>{children}</main>
    </div>
  );
};

export default Layout;
