import React from 'react';
import {Component} from 'react';
import './header.css';

class Header extends Component{
  render(){
    return(
      <div className={"header"}>
      <div className={"flexbox"}>
      <div className={"flexitem"}><img className={"logo"} src={require('../Images/logo.png')}></img><span>Főoldal</span></div>
      <div className={"flexitem"}>Random könyv</div>
      <div className={"flexitem"}>Vásárlás</div>
      <div className={"flexitem"}>Eladás</div>
      <div className={"flexitem"}>Bejelentkezés</div>
      </div>
      </div>
    );
  }
}
export default Header;
