import { useEffect, useState, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef()
  if(typeof onClick !== "function") {
    return
  }
  useEffect(() => {
    console.log("Executed useEffect")
    if(element.current) {
      element.current.addEventListener("click", onClick)
    }
    // called returned function when component will be unmounted
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  return element
}

export default function App() {
  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello)

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <h1 onClick={sayHello}>Hi</h1>
    </div>
  );
}
