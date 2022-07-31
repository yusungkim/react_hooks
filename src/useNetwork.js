import { useState, useEffect } from "react";
import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleCahge = () => {
    const newNetworkStatus = navigator.onLine;
    if (typeof onChange === "function") {
      onChange(newNetworkStatus);
    }
    setStatus(newNetworkStatus);
  };
  useEffect(() => {
    // add event linstener when this component mounted
    window.addEventListener("online", handleCahge);
    window.addEventListener("offline", handleCahge);

    // remove event linstener when this component unmounted
    return () => {
      window.removeEventListener("online", handleCahge);
      window.removeEventListener("offline", handleCahge);
    };
  }, []);
  return status;
};

export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "Do somthing with network" : "Offline");
  };
  const isOnline = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}
