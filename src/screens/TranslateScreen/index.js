import React, { useState } from 'react'
import './styles.scss'
import { translateToPigLatin } from '@utils'
import { FlexRow, FlexColumn, TextArea, Button } from '@components/atoms'
import { Banner, Modal } from '@components/molecules'
import { Download, Trash } from '@icons'

const TranslateScreen = () => {
		const [textToTranslate, setTextToTranslate] = useState('')
		const [translatedText, setTranslatedText] = useState('')
		const [showModal, setShowModal] = useState('')

		const handleChange = (e) => {
				let text = e.target.value

				setTextToTranslate(text)
				if (text == '') {
						setTranslatedText('')
						return
				}
				
				setTranslatedText(translateToPigLatin(text))
		}

		const setLocalStorageHistory = (history) => {
				localStorage.setItem('pigLatinTranslationHistory', history)
		}

		const handleSave = () => {
				const object = {
						normal: textToTranslate,
						translated: translatedText
				}

				const translationHistory = localStorage.getItem('pigLatinTranslationHistory')

				if(translationHistory) {
						const parsedData = JSON.parse(translationHistory)
						parsedData.push(object)
						
						const data = JSON.stringify(parsedData)
						setLocalStorageHistory(data)
				}
				else {
						const data = JSON.stringify([object])
						setLocalStorageHistory(data)
				}

				setShowModal(true)
		}

		const handleClear = () => {
				setTextToTranslate('')
				setTranslatedText('')
		}

		return (
				<FlexColumn>
						<FlexRow>
								<Banner
										header='Translate!'
										subtitle={`Enter the text from the first box and click save if you want to then check your history!`}
								/>
						</FlexRow>
						<FlexColumn className='contentContainer'>
								<FlexRow className='inputContainer'>
										<TextArea
												className='customTextArea'
												label='Text to translate'
												value={textToTranslate}	
												onChange={handleChange}
										/>
										<TextArea
												disabled={true}
												label='Translated text'
												value={translatedText}
										/>
								</FlexRow>
								<FlexRow>
										<Button
												title='Save'
												size='lg'
												Icon={Download}
												variant='success'
												className='customButtonStyle'
												onClick={() => handleSave()}
										/>
										<Button 
												title='Clear'
												size='lg'
												Icon={Trash}
												variant='danger'
												className='customButtonStyle'	
												onClick={() => handleClear()}
										/>
								</FlexRow>
						</FlexColumn>
						<Modal
								show={showModal}
								setShow={setShowModal}
								title='Message'
								message='Translation successfully saved!'
						/>
				</FlexColumn>
		)
}
export default TranslateScreen
