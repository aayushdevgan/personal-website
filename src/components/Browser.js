import React from "react";
import BrowserNav from "./BrowserNav";
import ConnectTab from "./ConnectTab";
import ProfilesTab from "./ProfilesTab";

import {BLOG_TAB, PROFILES_TAB, CONNECT_TAB, ABOUT_TAB} from "../utils/constants";
import "./Browser.scss";
import BlogTab from "./BlogTab";
import AboutTab from "./AboutTab";

export default function Browser({
  activeTab,
  onActiveTabChange,
  blogClassName,
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
        blogClassName={blogClassName}
        connectClassName={connectClassName}
        profilesClassName={profilesClassName}
      />
      {activeTab === ABOUT_TAB && <AboutTab />}
      {activeTab === BLOG_TAB && <BlogTab />}
      {activeTab === CONNECT_TAB && <ConnectTab />}
      {activeTab === PROFILES_TAB && <ProfilesTab />}
    </div>
  );
}
