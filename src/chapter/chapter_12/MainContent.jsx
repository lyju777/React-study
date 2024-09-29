import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const {theme, toogleTheme} = useContext(ThemeContext);

  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      padding:"1.5rem",
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    }}>
     <p>테마 변경이 가능한 웹사이트</p>
     <button onClick={toogleTheme}>테마변경</button>
    </div>
  )
}

export default MainContent;