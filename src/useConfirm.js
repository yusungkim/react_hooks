import { useEffect, useState, useRef } from "react";
import "./styles.css";

const useConfirm = (message="", onConfirm, onCancel) => {
  if(onConfirm || typeof onConfirm !== "function") {
    return
  }
  if(onCancel || typeof onCancel !== "function") {
    return
  }
  const confirmAction = () => {
    if(confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }
  return confirmAction
}

export default function App() {
  const sayHello = () => console.log("say hello")
  const abort = () => console.log("aborted")
  const confirmHello = useConfirm("Are you sure", sayHello, abort)
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirmHello}>Hello</button>
    </div>
  );
}
