import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem dest="/" label="home" text="Início"/>
            <NavItem dest="/users" label="users" text="Usuários"/>
        </nav>
    </aside>