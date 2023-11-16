import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Header } from './Components/Header/Header'
import { BreadcrumbBar } from './Components/BreadcrumbBar/BreadcrumbBar';
import { CreationActionBar } from './Components/CreationActionBar/CreationActionBar';
import { Toggle } from './Components/Toggle/Toggle';
import { Ai } from './Components/AIButton/AIButton';
import { Search } from './Components/Search/Search';
import { LargeButton } from './Components/LargeButton/LargeButton';
import { AppIcon } from './icons/AppIcon/AppIcon';
import { SmallClusterIcon } from './icons/AppIcon/SmallClusterIcon';
import { SmallItemIcon } from './icons/AppIcon/SmallItemIcon';
import { Cluster } from './Components/Cluster/Cluster';

const App = () => {

  const handleSearch = (searchTerm) => {
    // Perform your search logic here with the searchTerm
    console.log('Searching for:', searchTerm);
  };

  const [toggleState, setToggleState] = useState("off");

  const handleToggleChange = (newState) => {
    // You can perform any additional actions here when the toggle state changes
    console.log("Toggle state changed to:", newState);
    setToggleState(newState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <AppIcon className="app-icon" />
        <h1>Welcome</h1>

        <SmallClusterIcon/>
        <SmallItemIcon/>

        <Cluster text="Hello"/>

        <CreationActionBar/>
        <Toggle
        state={toggleState}
        darkMode="on"
        onOffLabels="on"
        contrast="on"
        onChange={handleToggleChange}
        />

        <Ai/>
        <Search onSearch={handleSearch} />

        <LargeButton className="large-button-instance" divClassName="design-component-instance-node" fill="blue" text="Sign Up" />
        <LargeButton className="large-button-instance" divClassName="design-component-instance-node" fill="stroke-only" text="Log In" />


        <BreadcrumbBar/>
      </header>
    </div>
  );
}

export default App;
