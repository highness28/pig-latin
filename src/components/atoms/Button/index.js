import React from 'react'
import './styles.scss'

const Button = ({ style, props, Icon, onClick, className, title, variant='primary', size='md' }) => (
		<button
				style={style}
				onClick={onClick}
				className={`button ${variant} ${size}${className ? ` ${className}` : ''}`}
		>
				{Icon && <Icon className='icon' size={15}/>}
				{title}
		</button>
)

export default Button
