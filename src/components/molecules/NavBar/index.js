import React from 'react'
import {
		FlexRow,
		NavLink
} from '@components/atoms'
import { Home, Translate, Refresh, Box } from '@icons'
import './styles.scss'

const NavBar = () => (
		<FlexRow className='navBar'>
				<NavLink to='/' exact title='Home' Icon={Home} />
				<NavLink to='/translate' exact title='Translate' Icon={Translate} />
				<NavLink to='/history' exact title='History' Icon={Refresh} />
				<NavLink to='/components' exact title='Components' Icon={Box} />
		</FlexRow>
)

export default NavBar
