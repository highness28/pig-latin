import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '@components/molecules/NavBar'
import Content from '@components/molecules/Content'
import Footer from '@components/molecules/Footer'
import theme from './theme.scss'

const App = () => (
		<Router baseName='pig-latin'>
				<NavBar />
				<Content />
				<Footer />
		</Router>
)

export default App
