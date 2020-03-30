import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <Link to={props.dest} className="nav-item">
        <i className={`fa fa-${props.label}`}></i> {props.text}
    </Link>