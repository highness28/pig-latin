import React from 'react'
import './styles.scss'

const FlexRow = ({ children, style, className }) => (
		<div className={`flexRow${className ? ` ${className}` : ''}`} style={style}>
				{children}
		</div>
)

export default FlexRow
