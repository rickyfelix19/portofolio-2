function ProjectCard() {
	const projectCardItems = [
		{
			image: "",
			subheading: "UI/UX Designer at PPIA",
			title:
				"KIPI is a bi-annual conference held and organized by PPIA (Indonesian Students’ Association of Australia ) and invites Indonesian academias staying at Australia to share their work.",
			paragraph:
				"The final results in our team creating a website for all of our viewers to enjoy during the Conference activities.",
			link: "",
		},
		{
			image: "",
			subheading: "USYD - COMP5216: Mobile Computing",
			title:
				"Give a Gift was a solution to introduce that gift gifting is possible even if you are far away from your loved ones.",
			paragraph:
				"Our solution was featured as one of the best UX Design Solution within the cohort.",
			link: "",
		},
		{
			image: "",
			subheading: "USYD - IDEA 9102: IDEA Studio",
			title:
				"Bottled Moments is a created to introduce the connection of people to the lake by sending memories and gifts onto the lake (digitally)",
			paragraph:
				"Our group received one of the best solution and was presented to the clienteles at mapMIMA.",
			link: "",
		},
	];
	return (
		<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
			<h4 className="text-white dark:text-black text-xl sm:text-xl lg:text-xl tracking-tight text-center mb-10">
				CASE STUDIES
			</h4>

			<div className="min-h-screen flex flex-col items-center justify-center p-8">
				{projectCardItems.map((item, index) => (
					<div
						key={index}
						className="bg-slate-300 p-8 rounded-lg flex items-center mb-10"
					>
						<div className="w-1/2 pr-8">
							<p className="text-s font-semibold text-gray-600 mb-2">
								{item.subheading}
							</p>
							<h2 className="text-2xl font-bold text-black mb-4">
								{item.title}
							</h2>
							<p className="text-black">{item.paragraph}</p>
						</div>
						<div className="w-1/2 flex justify-center relative">
							<img
								src={item.image}
								alt="Phone 1"
								className="w-40 h-80 object-cover"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectCard;
