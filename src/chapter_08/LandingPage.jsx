import React, {useState} from "react";
import Toolbar from "./toolbar";

function LandingPage(props) {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const onClickLogin = () => {
      setIsLoggedIn(true);
   };

   const onClickLogout = () => {
      setIsLoggedIn(false);
   };

   return (
      <div>
        <Toolbar
          isLoggedIn={isLoggedIn}
          onClickLogin={onClickLogin}
          onClickLogout={onClickLogout}
        />
      </div>
   )
}

export default LandingPage;