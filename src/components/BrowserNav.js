import React from "react";
import { BLOG_TAB, PROFILES_TAB, CONNECT_TAB, ABOUT_TAB } from "../utils/constants";
import "./BrowserNav.scss";

export default function BrowserNav({
  activeTab,
  onActiveTabChange,
  aboutClassName,
  blogClassName,
  connectClassName,
  profilesClassName
}) {
  const onTabClick = (event) => {
    onActiveTabChange(event.target.id);
  };
  return (
      <div className="browser-nav-container">
        <div className="icons-container">
          <img className="icon" src={require("../assets/close.png")} />
          <img className="icon" src={require("../assets/minimize.png")} />
          <img className="icon" src={require("../assets/maximize.png")} />
        </div>
        <div className="tabs-container">

          <button
              id={ABOUT_TAB}
              className={aboutClassName}
              onClick={(e) => onTabClick(e)}>
            <img
                className="tab-icon"
                src={require("../assets/tab-icon-draft.png")}/>
            <p className="tab-text">About Me</p>
            {activeTab !== ABOUT_TAB  && activeTab !== BLOG_TAB && (
                <img
                    className="tab-divider"
                    src={require("../assets/divider.png")}
                />
            )}
          </button>
            <button
                id={BLOG_TAB}
                className={blogClassName}
                onClick={(e) => onTabClick(e)}>
                <img
                    className="tab-icon"
                    src={require("../assets/tab-icon-draft.png")}/>
                <p className="tab-text">Blogs</p>
                {activeTab !== BLOG_TAB  && activeTab !== PROFILES_TAB && (
                    <img
                        className="tab-divider"
                        src={require("../assets/divider.png")}
                    />
                )}
            </button>

        <button
            id={PROFILES_TAB}
            className={profilesClassName}
            onClick={(e) => onTabClick(e)}>
            <img
                className="tab-icon"
                src={require("../assets/tab-icon-draft.png")}/>
            <p className="tab-text">Profiles</p>
            {activeTab !== PROFILES_TAB && activeTab !== CONNECT_TAB && (
                <img
                    className="tab-divider"
                    src={require("../assets/divider.png")}
                />
            )}
        </button>

        <button
            id={CONNECT_TAB}
            className={connectClassName}
            onClick={(e) => onTabClick(e)}>
            <img
                className="tab-icon"
                src={require("../assets/tab-icon-draft.png")}
            />
            <p className="tab-text">Connect</p>
            {activeTab !== CONNECT_TAB && (
                <img
                    className="tab-divider"
                    src={require("../assets/divider.png")}
                />
            )}
        </button>
        </div>
      </div>
  );
}
