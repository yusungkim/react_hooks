import { useRef, useEffect } from "react";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number") {
    return;
  }
  if (typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    if (current) {
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>lorem ipsum xxxxx</p>
    </div>
  );
}
