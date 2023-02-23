import React, { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import Banner from "./components/Banner";
import Browser from "./components/Browser";
import { CONNECT_TAB, PROFILES_TAB, RESUME_TAB, ABOUT_TAB } from "./utils/constants";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState(ABOUT_TAB);
  const [aboutClassName, setAboutClassName] = useState("tab-button");
  const [connectClassName, setConnectClassName] = useState("tab-button");
  const [profilesClassName, setProfilesClassName] = useState("tab-button");
  const [resumeClassName, setResumeClassName] = useState("tab-button");

  const onActiveTabChange = (newActiveTab) => {
    setActiveTab(newActiveTab);
    setActiveTabCss(newActiveTab);
  };

  const setActiveTabCss = (newActiveTab) => {
  newActiveTab === ABOUT_TAB
      ? setAboutClassName("tab-button active-tab")
      : setAboutClassName("tab-button");
  newActiveTab === RESUME_TAB
      ? setResumeClassName("tab-button active-tab")
      : setResumeClassName("tab-button");
  newActiveTab === PROFILES_TAB
      ? setProfilesClassName("tab-button active-tab")
      : setProfilesClassName("tab-button");
  newActiveTab === CONNECT_TAB
      ? setConnectClassName("tab-button active-tab")
      : setConnectClassName("tab-button");
  };

  return (
    <div className="App">
      <TopNavBar changeActiveTab={onActiveTabChange} />
      <Banner />
      <Browser
        activeTab={activeTab}
        changeActiveTab={setActiveTab}
        aboutClassName={aboutClassName}
        resumeClassName={resumeClassName}
        profilesClassName={profilesClassName}
        connectClassName={connectClassName}
        onActiveTabChange={onActiveTabChange}
      />
      <Footer />
    </div>
  );
}

export default App;
