import React from 'react'
import './styles.scss'
import {
		Button,
		FlexRow
} from '@components/atoms'
import styled from 'styled-components'

const ButtonList = () => (
		<FlexRow className='container'>
				<Button
						title='Extra Small'
						size='xs'
						variant='primary'
						className='customButtonStyle'
				/>
				<Button
						title='Small'
						size='sm'
						variant='default'
						className='customButtonStyle'
				/>
				<Button
						title='Medium'
						size='md'
						variant='warning'
						className='customButtonStyle'
				/>
				<Button
						title='Large'
						size='lg'
						variant='danger'
						className='customButtonStyle'
				/>
				<Button
						title='Extra Large'
						size='xl'
						variant='success'
						className='customButtonStyle'
				/>
		</FlexRow>
)

export default ButtonList
