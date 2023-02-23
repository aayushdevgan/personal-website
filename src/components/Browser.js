import React from "react";
import BrowserNav from "./BrowserNav";
import ConnectTab from "./ConnectTab";
import ProfilesTab from "./ProfilesTab";
import ResumeTab from "./ResumeTab";
import AboutTab from "./AboutTab";
import {RESUME_TAB, PROFILES_TAB, CONNECT_TAB, ABOUT_TAB} from "../utils/constants";
import "./Style.scss";
export default function Browser({
  activeTab,
  onActiveTabChange,
  resumeClassName,
  aboutClassName,
  profilesClassName,
  connectClassName
}) {
  const handleTabChange = (new_active_tab) => {
    onActiveTabChange(new_active_tab);
  };
  return (
    <div className="browser-container">
      <BrowserNav
        activeTab={activeTab}
        onActiveTabChange={handleTabChange}
        aboutClassName={aboutClassName}
        resumeClassName={resumeClassName}
        connectClassName={connectClassName}
        profilesClassName={profilesClassName}
      />
      {activeTab === ABOUT_TAB && <AboutTab />}
      {activeTab === RESUME_TAB && <ResumeTab />}
      {activeTab === CONNECT_TAB && <ConnectTab />}
      {activeTab === PROFILES_TAB && <ProfilesTab />}
    </div>
  );
}
