import React, { useState, useEffect } from 'react'
import { FlexRow, FlexColumn } from '@components/atoms'
import { Banner, HistoryTable, Pagination } from '@components/molecules'
import { arrayPager } from '@utils'
import './styles.scss'

const HistoryScreen = () => {
		const [pigLatinHistory, setPigLatinHistory] = useState(JSON.parse(localStorage.getItem('pigLatinTranslationHistory')))
		const [currentPage, setCurrentPage] = useState(1)
		const offset = 10
		const endPage = Math.ceil(pigLatinHistory ? pigLatinHistory.length : 0 / offset)

		const onDelete = (historyIndex) => {
				setPigLatinHistory(pigLatinHistory.filter((_, index) => index != historyIndex))
				localStorage.setItem('pigLatinTranslationHistory', JSON.stringify(pigLatinHistory))
		}

		return (
				<FlexColumn>
						<Banner
								header='History'
								subtitle='Feel free to browse and delete your translations here.'
						/>
						<FlexColumn className='contentContainer'>
								<FlexRow className='tableContainer'>
										<HistoryTable
												data={arrayPager(pigLatinHistory ? pigLatinHistory : [], currentPage, offset)}
												onDelete={onDelete}
										/>
								</FlexRow>
								<FlexRow className='paginationContainer'>
										<Pagination
												currentPage={currentPage}
												endPage={endPage}
												setPage={setCurrentPage}
										/>
								</FlexRow>
						</FlexColumn>
				</FlexColumn>
		)
}

export default HistoryScreen
