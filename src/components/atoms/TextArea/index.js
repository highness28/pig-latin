import React from 'react'
import FlexColumn from '@components/atoms/FlexColumn'
import './styles.scss'

const TextArea = ({ value, onChange, disabled=false, className, label }) => (
		<FlexColumn>
				<span className='textAreaLabel'>{label}</span>
				<textarea
						className={`textArea${className ? ` ${className}` : ''}`}
						disabled={disabled}
						value={value}
						onChange={onChange}
				>
						{value}
				</textarea>
		</FlexColumn>
)

export default TextArea
