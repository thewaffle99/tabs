import './App.css'
import React, {useState} from 'react';
import Tabs from './components/tabComponent';
import Results from './components/resultsComponent';


function App() {

  const tabsArray = [
    {label: "Tab 1", content: "Tab 1 content is cool"},
    {label: "Tab 2", content: "Tab 2 content is rad"},
    {label: "Tab 3", content: "Tab 3 content is secretly awesome"}
  ];

  const [ allTabs, setAllTabs ] = useState(tabsArray);
  const [currentTabIndex, setCurrentTabIndex ] = useState(0);
  

  return (
    <div className="App">
      
      <Tabs
      allTabs = { allTabs }
      currentTabIndex = { currentTabIndex }
      setCurrentTabIndex = { setCurrentTabIndex}
      />

      <Results
      allTabs={ allTabs }
      currentTabIndex={ currentTabIndex }
      />

    </div>
  );
}

export default App;
