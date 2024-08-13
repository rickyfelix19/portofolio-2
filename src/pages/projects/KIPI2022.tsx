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
						Developed with the team at PPIA Department of IT
					</p>
				</header>

				{/* Image */}
				<div className="mb-8">
					<img
						src="https://via.placeholder.com/800x400"
						alt="Blog Post Cover"
						className="w-full rounded-lg object-cover"
					/>
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
					<h2 className="text-3xl">Creating Our Brief</h2>
					<br />
					<p>Our group started this project by creating a brief as follow</p>
					<br />
					<div className="mb-8">
						<img
							src="https://via.placeholder.com/800x400"
							alt="Blog Post Cover"
							className="w-full rounded-lg object-cover"
						/>
					</div>
				</article>

				{/* Footer */}
				<footer className="mt-16 text-center">
					<p className="text-white">
						Written by <span className="font-semibold">John Doe</span>
					</p>
				</footer>
			</div>
			<Footer />
		</div>
	);
}

export default BlogPost;
