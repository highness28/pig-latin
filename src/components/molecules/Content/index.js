import React from 'react'
import './styles.scss'
import {
		HomeScreen,
		TranslateScreen,
		HistoryScreen,
		ComponentsScreen
} from '@screens'
import {
		Switch,
		Route
} from 'react-router-dom'

const Content = () => (
		<div className='container'>
				<Switch>
						<Route path="/" exact component={HomeScreen} />
						<Route path="/translate" exact component={TranslateScreen} />
						<Route path="/history" exact component={HistoryScreen} />
						<Route path="/components" exact component={ComponentsScreen} />
				</Switch>
		</div>
)

export default Content
