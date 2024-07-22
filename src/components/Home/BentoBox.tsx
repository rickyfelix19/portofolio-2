import React from "react";

function BentoBox() {
	const bentoBoxItems = [
		{
			classNameBox:
				"bg-gray-200 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center",
			heading: "INTRODUCTION",
			paragraph:
				"Hi, I am Ricky Felix, a UI/UX Developer from Medan, Indonesia.",
			image: "",
		},
		{
			classNameBox:
				"bg-gray-200 p-4 rounded-lg h-80 sm:col-span-2 flex flex-col justify-end items-center text-center",
			heading: "MORE ABOUT ME",
			paragraph:
				"I am mainly do more design than coding now. However, this website is 100% code with Reactjs and other UI Libraries.",
			image: "",
		},
		{
			classNameBox:
				"bg-gray-200 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center",
			heading: "CODING",
			paragraph: "Reactjs, HTML, CSS, JavaScript, Tailwind, Bootstrap, SQL",
			image: "",
		},
		{
			classNameBox:
				"bg-gray-200 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center",
			heading: "DESIGN",
			paragraph: "Adobe Photoshop, Figma, Figjam, Miro, Balsamiq",
			image: "",
		},
		{
			classNameBox:
				"bg-gray-200 p-4 rounded-lg h-80 flex flex-col justify-end items-center text-center",
			heading: "SOFT SKILLS",
			paragraph:
				"Teamwork, Design Thinking, Leadership, Communication, Marketing, Hospitality",
			image: "",
		},
	];
	return (
		<div>
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
					{bentoBoxItems.map((item, index) => (
						<div className={item.classNameBox}>
							<div
								key={index}
								className="bg-gray-200 rounded-lg overflow-hidden"
							>
								<div
									className="h-32 bg-cover bg-center"
									style={{ backgroundImage: `url(${item.image})` }}
								></div>
								<div className="p-4 text-center">
									<h3 className="text-lg font-bold mb-2">{item.heading}</h3>
									<p className="text-black">{item.paragraph}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BentoBox;
