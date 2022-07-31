import { useState } from "react";
import "./styles.css";

const contents = [
  {
    tab: "section 1",
    content: "I am the content of section 1"
  },
  {
    tab: "section 2",
    content: "I am the content of section 2"
  }
];

const useTabs = (initialTabIndex, allTabs) => {
  const [index, setIndex] = useState(initialTabIndex);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentTab: allTabs[index],
    changeTab: setIndex
  };
};

export default function App() {
  const { currentTab, changeTab } = useTabs(0, contents);

  return (
    <div className="App">
      {contents.map((section, index) => {
        return <button onClick={() => changeTab(index)}>{section.tab}</button>;
      })}
      <div>
        <h1>{currentTab.tab}</h1>
        <p>{currentTab.content}</p>
      </div>
    </div>
  );
}
