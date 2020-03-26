import React from 'react'
import { Right, Left } from '@icons'
import './styles.scss'

const Pagination = ({ currentPage, endPage, setPage }) => {
		const pages = []

		for(let i = 1; i <= endPage; i++) {
				pages.push(
						<span
								key={i}
								className={`pageNumber ${i == currentPage ? ' activePage' : ''}`}
								onClick={() => setPage(i)}
						>
								{i}
						</span>
				)
		}

		return (
				<div className='paginationContent'>
						<Left
								className='left'
								onClick={() => {
										if(currentPage != 1) setPage(--currentPage)
								}}
						/>
						{pages}							
						<Right
								onClick={() => {
										if(currentPage != endPage) setPage(++currentPage)
								}}	
								className='right'
						/>
				</div>
		)
}

export default Pagination
