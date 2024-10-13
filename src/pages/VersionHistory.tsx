import NavigationBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";

const versionHistory = [
	{
		version: "2.5.0 - Webflow Final",
		date: "25 March 2024",
		changes: [
			"Final Version at Webflow",
			"Link: https://rickyfelix19.webflow.io/",
		],
	},
	{
		version: "3.0.0 - Vite React",
		date: "19 August 2024",
		changes: [
			"Migrated the website to the current site",
			"Deployed website online for everyone to see",
			"Link: https://rickyfelix025.vercel.app/",
		],
	},
	{
		version: "3.0.1",
		date: "01 September 2025",
		changes: [
			"Added presentation slides to each projects",
			"Added Interface Design project",
			"Refactor projects page",
			"Add version history",
		],
	},
	{
		version: "3.0.2",
		date: "13 October 2025",
		changes: ["Change image into icons", "Insert icons into BentoBox"],
	},
];

const VersionHistory = () => {
	return (
		<div>
			<NavigationBar />
			<div className="min-h-screen  p-8">
				<h1 className="text-4xl font-bold text-center mb-8 text-white">
					Version History
				</h1>
				<div className="max-w-4xl mx-auto space-y-8">
					{versionHistory.map((version) => (
						<div
							key={version.version}
							className="bg-white shadow-md rounded-lg p-6"
						>
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-2xl font-semibold">
									Version {version.version}
								</h2>
								<span className="text-gray-500">{version.date}</span>
							</div>
							<ul className="list-disc list-inside">
								{version.changes.map((change, index) => (
									<li key={index} className="text-gray-700">
										{change}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default VersionHistory;
