import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header =()=>{
    return(
        <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#">Social Network</a>}
  centerChildren
  id="mobile-nav"
  menuIcon={<><div className={style.menu}></div><div className={style.menu}></div><div className={style.menu}></div></>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <Link to='/feed'><NavItem href="">
    Feed
  </NavItem></Link>
  <NavItem href="">
    People
  </NavItem>
  <NavItem href="">
    Profile
  </NavItem>
</Navbar>
    )
}

export default Header;