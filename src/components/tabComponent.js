import React from 'react';

const Tabs = (props) => {
const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

// conditionally styling the tabs with classes in CSS
const tabStyle = (index) => {
if (index === currentTabIndex) {
    return "selectedTab";
} else {
    return "nonSelectedTab";
}
}
// this is how we would use functionality on 26 if we needed it to do more than one thing
// const setSelectedTab = (index) => {
// setCurrentTabIndex(index);
// }

// Using both inline style and css to demonstrate both usage syntax
return (
<div style={{ margin: "auto", width: "85%", textAlign: "left"}}>

    {/* we do not actually need to use content, but it MUST be there so we can get the index */}
    {
    allTabs.map((item, index) => (
        <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setCurrentTabIndex(index) }>
        { item.label }
        </div>
    ))
    }
</div>
)
}

export default Tabs;