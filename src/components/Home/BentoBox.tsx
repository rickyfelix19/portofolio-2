import {
	FcReadingEbook,
	FcPortraitMode,
	FcParallelTasks,
	FcPicture,
	FcConferenceCall,
} from "react-icons/fc";

import React from "react";

function BentoBox() {
	const bentoBoxItems = [
		{
			classNameBox:
				"bg-slate-300 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center ",
			heading: "INTRODUCTION",
			paragraph:
				"Hi, I am Ricky Felix, a UI/UX Developer from Medan, Indonesia.",
			icon: FcReadingEbook,
		},
		{
			classNameBox:
				"bg-slate-300 p-4 rounded-lg h-80 col-span-2 max-lg:col-span-1 flex flex-col justify-end items-center text-center ",
			heading: "MORE ABOUT ME",
			paragraph:
				"I am mainly do more design than coding now. However, this website is 100% code with Reactjs and other UI Libraries.",
			icon: FcPortraitMode,
		},
		{
			classNameBox:
				"bg-slate-300 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center ",
			heading: "CODING",
			paragraph: "Reactjs, HTML, CSS, JavaScript, Tailwind, Bootstrap, noSQL",
			icon: FcParallelTasks,
		},
		{
			classNameBox:
				"bg-slate-300 p-4 rounded-lg  h-80 flex flex-col justify-end items-center text-center ",
			heading: "DESIGN",
			paragraph: "Adobe Photoshop, Figma, Figjam, Miro, Balsamiq",
			icon: FcPicture,
		},
		{
			classNameBox:
				"bg-slate-300 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center ",
			heading: "SOFT SKILLS",
			paragraph:
				"Teamwork, Design Thinking, Leadership, Communication, Marketing, Hospitality",
			icon: FcConferenceCall,
		},
	];
	return (
		<div>
			<div className="text-black relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
					{bentoBoxItems.map((item, index) => (
						<div key={index} className={item.classNameBox}>
							<div className="flex flex-col items-center">
								<div className="text-8xl mb-4">
									{React.createElement(item.icon)}
								</div>
								<h3 className="text-lg font-bold mb-2">{item.heading}</h3>
								<p className="text-black dark:text-black">{item.paragraph}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BentoBox;
