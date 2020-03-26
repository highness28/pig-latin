import React from 'react'
import './styles.scss'
import { FlexColumn, FlexRow, Button } from '@components/atoms'

const Modal = ({ show, setShow, title, message }) => {
		const className = show ? 'modal display-block' : 'modal display-none'

		return (
				<div className={className}>
						<section className='modal-main'>
								<FlexColumn className='successModal'>
										<FlexRow className='modalHeader'>
											<span>{title}</span>
										</FlexRow>
										<hr className='divider' />
										<FlexRow className='modalMessage'>
												{message}
										</FlexRow>
										<hr className='divider' />
										<FlexRow className='modalActionContainer'>
												<Button
														title='Close'
														size='md'
														variant='danger'
														onClick={() => setShow(false)}	
												/>
										</FlexRow>
								</FlexColumn>
						</section>
				</div>
		)
}

export default Modal
