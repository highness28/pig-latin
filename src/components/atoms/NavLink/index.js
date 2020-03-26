import React from 'react'
import './styles.scss'
import { NavLink as BaseNavLink } from 'react-router-dom'

const NavLink = ({ to, exact=false, title, Icon }) => (
		<BaseNavLink
				className='navLink'
				to={to}
				exact={exact}
		>
				{Icon && <Icon className='icon' size={30}/>}	
				{title}
		</BaseNavLink>
)

export default NavLink
