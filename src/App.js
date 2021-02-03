import React, { Component } from 'react';
import './App.scss';

import { Route } from "react-router-dom"
import TopBar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';

const pages = [
  {
      name: "Dashboard",
      iconClass: "fa fa-home",
      path: "/",
      component: Dashboard
  },
  {
      name: "User Profile",
      iconClass: "fa fa-user",
      path: "/user-profile",
      component: UserProfile
  },
  {
      name: "Settings",
      iconClass: "fa fa-cogs",
      path: "/settings",
      component: Settings
  },
]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      sidebarIsShown: true
    }
    this.toggleSidebar = () => {
      this.setState(
        {
          sidebarIsShown: !this.state.sidebarIsShown
        }, () => {
          console.log(this.state.sidebarIsShown);
        }
      );
    }
  }


  render() {
    return (
      <Route render={({ location }) => {
        
        return <div className="flex h-screen bg-gray-100 font-Montserrat">
          <Sidebar toggleSidebar={()=>this.toggleSidebar()} sidebarIsShown={this.state.sidebarIsShown} pages={pages} location={location}/>
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopBar toggleSidebar={()=>this.toggleSidebar()}/>
            <Body>
              {pages.map((page, index)=>{
                return <Route exact path={page.path} key={index} component={page.component} />
              })}
            </Body>
          </div>
        </div>

      }} />
    );
  }
}

export default App;