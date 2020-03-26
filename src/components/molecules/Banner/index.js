import React from 'react'
import styled from 'styled-components'
import './styles.scss'
import {
		FlexColumn,
		FlexRow
} from '@components/atoms'
import KawaiiBanner from '@assets/images/kawaii-banner.png'

const HomeScreen = ({ header, subtitle }) => (
		<FlexColumn className='banner'>
				<FlexRow className='bannerHeaderContainer'>
						<span className='bannerHeader'>
								{header}
						</span>
				</FlexRow>
				<FlexRow>
						<span className='bannerHeaderSubtitle'>
								{subtitle}
						</span>
				</FlexRow>
		</FlexColumn>
)

export default HomeScreen
