import React from "react";

import { Button } from "./ui/button";

function BentoBox() {
	return (
		<div>
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
					<div className="bg-gray-200 p-4 rounded-lg h-64 flex flex-col justify-end items-center text-center">
						<h4 className="text-lg font-bold mb-2 text-black">INTRODUCTION</h4>
						<p className="text-black">
							Hi, I am Ricky Felix, a UI/UX Developer from Medan, Indonesia.
						</p>
					</div>
					<div className="bg-gray-200 p-4 rounded-lg h-64 sm:col-span-2 flex flex-col justify-end items-center text-center">
						<p className="text-black">
							<h4 className="text-lg font-bold mb-2 text-black">
								MORE ABOUT ME
							</h4>
							I am mainly do more design than coding now. However, this website
							is 100% code with Reactjs and other UI Libraries.
						</p>
					</div>
					<div className="bg-gray-200 p-4 rounded-lg h-64 flex flex-col justify-end items-center text-center">
						<h4 className="text-lg font-bold mb-2 text-black">CODING</h4>
						<p className="text-black">
							Reactjs, HTML, CSS, JavaScript, Tailwind, Bootstrap, SQL
						</p>
					</div>
					<div className="bg-gray-200 p-4 rounded-lg h-64 flex flex-col justify-end items-center text-center">
						<h4 className="text-lg font-bold mb-2 text-black">DESIGN</h4>
						<p className="text-black">
							Adobe Photoshop, Figma, Figjam, Miro, Balsamiq
						</p>
					</div>
					<div className="bg-gray-200 p-4 rounded-lg h-64 flex flex-col justify-end items-center text-center">
						<h4 className="text-lg font-bold mb-2 text-black">SOFT SKILLS</h4>
						<p className="text-black">
							Teamwork, Design Thinking, Leadership, Communication, Marketing,
							Hospitality
						</p>
					</div>
					<div className="bg-gray-200 p-4 rounded-lg h-48 sm:col-span-2 lg:col-span-3 flex flex-col justify-end items-center text-center">
						<h4 className="text-lg font-bold mb-2 text-black">FIND OUT MORE</h4>
						<p className="text-black">
							Check out my projects through this link. <br />
							<br />
							<Button>Find out more.</Button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BentoBox;
