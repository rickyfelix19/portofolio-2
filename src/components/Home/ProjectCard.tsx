import React from "react";

function ProjectCard() {
	const projectCardItems = [
		{ image: "", heading: "", paragraph: "", link: "" },
		{ image: "", heading: "", paragraph: "", link: "" },
		{ image: "", heading: "", paragraph: "", link: "" },
	];
	return (
		<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
			<h4 className="text-slate-100 text-xl sm:text-xl lg:text-xl tracking-tight text-center">
				CASE STUDIES
				<br />
				<br />
			</h4>
		</div>
	);
}

export default ProjectCard;
