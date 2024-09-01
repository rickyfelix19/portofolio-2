import Footer from "../../components/Common/Footer";
import NavBar from "../../components/Common/NavBar";

function BlogPost() {
	return (
		<div>
			<NavBar />
			<div className="max-w-4xl mx-auto p-8">
				{/* Header */}
				<header className="mb-8 text-center">
					<h1 className="text-4xl font-bold mb-4 text-white">KIPI 2022</h1>
					<p className="text-white">
						Developed with the team at PPIA Department of IT for about 3 months
					</p>
				</header>
				{/* Image */}
				<div className="my-10">
					<img
						src="../projects/kipi-2022/Banner.png"
						alt="Blog Post Cover"
						className="w-full rounded-lg object-cover"
					/>
				</div>
				{/* Button */}
				<div className="flex justify-center items-center">
					<button
						onClick={() =>
							window.open(
								"https://pitch.com/v/rickyportfolio-n7u8ra",
								"_blank",
								"noopener"
							)
						}
						className="mb-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Open Full Presentation
					</button>
				</div>
				{/* Content */}
				<article className="prose prose-lg max-w-none text-white">
					<h2 className="text-3xl">Introduction</h2>
					<br />
					<p>
						KIPI is an hybrid international symposium events organized by PPIA
						(Indonesian Students’ Association of Australia). The following
						project will only show one milestone out of three (KIPI 2022, a PPIA
						bi-annual event). However, the tools and design thinking process
						remains the same.
						<br /> <br />
						Annually, PPI DUNIA organizes an international symposium and in
						2022, PPI-Australia was selected to be as the host and organizer of
						SI XIV. Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian
						Students’ Association of Australia.
						<br /> <br />
						For approximately one year, PPIA create and organized multiple
						events and named it Road to SI. Our events / milestones are as
						follow:
						<ol>
							<li>1. KIPI</li>
							<li>2. Career Fest</li>
							<li>3. Symposium International XIV</li>
						</ol>
						<br />
						And I was assigned to lead the project to create a “Road to SI”
						website.
						<br /> <br />
					</p>
				</article>
				<hr />
				<br />
				<article className="prose prose-lg max-w-none text-white">
					<h3 className="text-2xl">Design Thinking Process</h3>
					<p>
						Our team goes through the Stanford design thinking process as our
						main process.
					</p>
					<br />
				</article>
				<article className="prose prose-lg max-w-none text-white">
					<h3 className="text-2xl">1) Empathize</h3>
					<p>
						As our team grow larger due to handling multiple projects. We
						started recruiting more people and therefore, created an onboarding
						process, we also include our stakeholders in our process to gather
						requirements and ensuring everyone is well informed each step from
						the beginning until the end.
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Stakeholders.jpg"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/kipi-2022/KIPI Brief.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article className="prose prose-lg max-w-none text-white">
					<h3 className="text-2xl">2) Define</h3>
					<p>
						As we continue down our process, we start conceptualizing our ideas
						into architectures and user journeys before we start creating our
						lo-fidelity and high fidelity from Figma to Webflow.
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Architecture.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Comparison.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article className="prose prose-lg max-w-none text-white">
					<h3 className="text-2xl">3) Ideations </h3>
					<p>
						In total, our group ideate in total six times,
						<ol>
							<li>
								1) We started by creating our lo fidelity. Each one of us
								designed our own version of the page
							</li>
							<li>
								2) We then went through internal discussion with ourselves to
								see which one we should use and improved upon
							</li>
							<li>
								3) We then select "our final piece" and add contemporary colors
								to the page
							</li>
							<li>
								4) We submit the result to our stakeholders and receive feedback
								that the color pallette didn't match with the overall theme of
								the conference and it made it seemed "unprofessional and
								childish" as it looked similar to childrens' toy color palette.
							</li>
							<li>
								5) Receiving the feedback, we continue by creating a Mi-Fidelity
								of our product
							</li>
						</ol>
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Lo Fidelity.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				<article className="prose prose-lg max-w-none text-white">
					<h3 className="text-2xl">4) Final Version</h3>
					<p>
						Approaching the deadline, we conducted a final usability testing to
						random users to improve upon our website, and the final result of
						the website is as seen as follow:
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Final.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Congrats.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>

				<hr />
				<br />

				<article className="prose prose-lg max-w-none text-white">
					<h2 className="text-3xl">After KIPI 2022</h2>
					<br />
					<p>
						After KIPI 2022, as previously stated there were two more that we
						need to finalize (Career Fest and Symposium International). Both of
						them overall follows the same design thinking process. As we
						maximize our time and effort by using Trello to do our agile sprint.
						<br /> <br />
						<div className="my-10">
							<img
								src="../projects/kipi-2022/Trello.png"
								alt="Blog Post Cover"
								className="w-full rounded-lg object-cover"
							/>
						</div>
					</p>
				</article>
				{/* Footer */}
				<footer className="mt-16 text-center">
					<p className="text-white">
						Demo is available at:{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="underline italic"
							href="https://symposium-ppid.webflow.io/"
						>
							https://symposium-ppid.webflow.io/
						</a>
					</p>
				</footer>
			</div>
			<Footer />
		</div>
	);
}

export default BlogPost;
