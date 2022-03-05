import React, { useCallback, useEffect } from "react";
import Notify from "./Noyify";

function Layout({ children }) {
  const ISSERVER = typeof window === "undefined";

  const loggedLocal =
    !ISSERVER && JSON.parse(localStorage.getItem("loggedIn"));

  const loggedToken = !ISSERVER && localStorage.getItem("refresh_token");

  const loginUser = useCallback(async () => {
   
  }, [loggedLocal, loggedToken]);

  useEffect(() => {
    loginUser();
  }, [loginUser]);

  return (
    <div>
    
      <Notify />
      {children}
    </div>
  );
}

export default Layout;
