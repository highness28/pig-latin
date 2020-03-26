import React, { useState } from 'react'
import './styles.scss'
import { FlexRow, FlexColumn, Button, TextArea } from '@components/atoms'
import {
		Banner,
		ButtonList,
		Modal,
		HistoryTable
} from '@components/molecules'

const ComponentsScreen = () => {
		const [showModal, setShowModal] = useState(false)
		const [textAreaValue, setTextAreaValue] = useState('')

		return (
				<FlexColumn>
						<Banner
								header='Components'
								subtitle='This is just to showcase all of the components that I created and to also show how I implemented them. Please read the overview of this page for full details on how i implemented the project.'
						/>
						<FlexColumn className='componentContents'>
								<FlexColumn className='overview'>
										<h1>Overview</h1>
										<ol>
												<li>I built this from scratch using npm init and npm install (some packages)</li>
												<li>What I did here is to make it as simple as possible that's also the reason if you check package.json you will just see a few packages installed. I wanna make this as small as possible.</li>
												<li>Showcasing my skills based on used packages by others will not make a pitch. I want you to see how I will implement things without even using as much as possible a package at all. As you can see even the buttons, modal, table are made purely by me and no material, glamorous, ionic, etc... is used in this project.</li>
												<li>I used parcel for this since implementation in parcel is a lot faster and given the time that I was given of course I am still working at my current job and I can't focus on this project 100% so I think using webpack will just give me headache and I will just waste time using it. Also in a project you have to use the most efficient way and tool as possible and since the project is not even that complicated I rooted for parcel on this.</li>
												<li>I didn't use any state management for this since using state management is for only projects that are big enough that passing through different components is a pain. This only has a level of 1 pass through so I believe using a state management package for this like mobx and redux is not even necessary.</li>
												<li>I didn't even use form since I do not need validations at all for this.</li>
												<li>I am NOT A DESIGNER so sorry for the design implementation LOL. I actually wanted to also use svg for this but again I am not a designer and creating an svg will take a lot of time for the given amount of time I needed to develop this.</li>
												<li>As I have researched what is Pig Latin and who uses it mainly, I though of hey why not make a theme that is kiddy as possible since users of this are mostly kids.i Am I right?</li>
												<li>Caveats of the project: it cannot parse properly symbols (well maybe yet since I don't have the time already to fix the algorithm, it actually took me long to build it), uppercase letters are intentionally stayed uppercase for the user to see his or her original inputs and where it goes.</li>
												<li>I hosted this on github just to showcase that I know how to deploy project into different servers (well for this one it is github pages). I also have an AWS account but I don't wanna expose that and buying a DNS server for this is too much so I decided to go with github pages instead.</li>
												<li>There's no media query for this because the requirements stated that this is a web. Basically if a mobile version should be implemented for this is should be an adaptive already and not web mobile view (performance issues speaking).</li>
												<li>I used sass for this project and I also used styled-components in some of the component just for modularity but basically it is 90% sass.</li>
												<li>What you will see below are all the components that I have coded without using any package. Again this is just to showcase on how I will implement things and also based on the requirements and of course the speed of the system is a must always. Why use a package if you can do it? Well there are other reason where you can use it ie: time bound systems that are needed to be finished fast, there is no other option and that package is hell good of implementation, familiarity, scaling, flexibility. Those are some of I think keypoints why you needed a package to handle thinkgs like mobx and redux though they are both state handler I believe they both serve a different purpose since both of them have caveats of their own.</li>
										</ol>
								</FlexColumn>
								<FlexColumn className='buttonList'>
										<h1>Button List</h1>
										<ButtonList />
								</FlexColumn>
								<FlexColumn className='modalList'>
										<h1>Modal</h1>
										<Button
												title='Open Modal'
												size='lg'
												variant='primary'
												onClick={() => setShowModal(true)}
										/>
										<Modal
												show={showModal}
												setShow={setShowModal}
												title='This is a title'
												message='This is a message'
										/>
								</FlexColumn>
								<FlexColumn className='tableList'>
										<h1>Table</h1>
										<HistoryTable
												data={[{
														normal: 'Sample Data',
														translated: 'Sample Data'
												}]}
										/>
								</FlexColumn>
								<FlexColumn className='textAreaList'>
										<h1>Text area</h1>	
										<FlexRow>
												<TextArea
														value={textAreaValue}
														onChange={(e) => setTextAreaValue(e.target.value)}
														label='Working text area'
												/>
												<TextArea
														label='Disabled text area'
														disabled={true}
												/>
										</FlexRow>
								</FlexColumn>
						</FlexColumn>
				</FlexColumn>
		)
}

export default ComponentsScreen
