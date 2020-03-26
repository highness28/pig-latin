import React from 'react'
import { Button } from '@components/atoms'
import { Trash } from '@icons'
import './styles.scss'

const HistoryTable = ({ data, onDelete }) => {
		const list = data && data.map((value, index) => (
				<tr key={index}>
						<td>{value.normal}</td>
						<td>{value.translated}</td>
						<td>
								<Button
										title='Delete'
										size='sm'
										variant='danger'
										className='customButton'
										Icon={Trash}
										onClick={() => onDelete(index)}
								/>
						</td>
				</tr>
		))

		return (
				<table>
						<thead>
								<tr>
										<td>Normal</td>
										<td>Translated</td>
										<td>Action</td>
								</tr>
						</thead>
						<tbody>
								{data.length > 0 ? list : (
										<tr>
												<td colSpan='3'>No data</td>
										</tr>
								)}
						</tbody>
				</table>
		)
}

export default HistoryTable
