import React from 'react'
import styled from 'styled-components'
import './styles.scss'
import YouTube from 'react-youtube'
import { FlexRow, FlexColumn } from '@components/atoms'
import { Banner } from '@components/molecules'

const HomeScreen = () => (
		<FlexColumn>
				<FlexRow>
						<Banner
								header='Welcome to "Pig Latin" translator!'
								subtitle='What is pig latin? Well lets have a look and learn from the video below. Enjoy!'
						/>
				</FlexRow>
				<FlexRow className='container'>
						<YouTube
								videoId='5_VC0QiTrPk'
								opts={{
										height: '400',
										width: '700'
								}}
						/>
				</FlexRow>
		</FlexColumn>
)

export default HomeScreen
