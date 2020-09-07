import React from 'react';
import {Navbar, NavItem, Dropdown, Icon, Divider} from 'react-materialize';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header =()=>{
    return(
        <Navbar
        className={style.header}
  alignLinks="right"
  brand={<span className="brand-logo">Social Network</span>}
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
  <Link to='/feed'><NavItem>
    Feed
  </NavItem></Link>
  <Link to='/people'><NavItem>
    People
  </NavItem></Link>
  <Link to='/profile'><NavItem>
    Profile
  </NavItem></Link>
  <Dropdown
    id="Dropdown_6"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!"><i class="fa fa-gear"></i></a>}
  >
    <a href="#">
    <i class="fa fa-sign-out"></i>
    </a>
    <a href="#">
      two
    </a>
    <a href="#">
      three
    </a>
  </Dropdown>
</Navbar>
    )
}

export default Header;