import React from 'react'
import './styles.scss'

const FlexColumn = ({ children, style, className }) => (
		<div className={`flexColumn${className ? ` ${className}` : ''}`} style={style}>
				{children}
		</div>
)

export default FlexColumn
