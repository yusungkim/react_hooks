import { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // componentDidMount, componentWillUpdate, componentWillUnmount
  useEffect(updateTitle, [title]);
  
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}
