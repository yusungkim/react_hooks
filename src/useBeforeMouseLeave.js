import { useEffect } from "react";
import "./styles.css";

const useBeforeMouseLeave = (onBeforeLeave) => {
  if (typeof onBeforeLeave !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    // call only leave from the top
    if (clientY <= 0) {
      onBeforeLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function App() {
  const begForLife = () => console.log("Please dont go");
  useBeforeMouseLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}
