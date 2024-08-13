import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-800 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex justify-center items-center w-full md:w-auto">
						<Link to="/" className="text-xl font-bold text-white">
							RF
						</Link>
					</div>
					<div className="hidden md:flex justify-center items-center w-full space-x-8">
						<Link
							to="/"
							className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium text-center"
						>
							Home
						</Link>
						<Link
							to="/"
							className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium text-center"
						>
							About Me
						</Link>
						<Link
							to="/"
							className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium text-center"
						>
							Projects
						</Link>
						<Link
							to="/"
							className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium text-center"
						>
							Contact Me
						</Link>
					</div>
					<div className="hidden md:flex items-center justify-center w-full md:w-auto">
						<a
							href="/resume.pdf"
							className="text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md text-sm font-medium"
							download
						>
							Resume
						</a>
					</div>
					<div className="-mr-2 flex items-center md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium text-center"
						>
							Home
						</Link>
						<Link
							to="/"
							className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium text-center"
						>
							About Me
						</Link>
						<Link
							to="/"
							className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium text-center"
						>
							Projects
						</Link>
						<Link
							to="/"
							className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium text-center"
						>
							Contact Me
						</Link>
						<a
							href="/resume.pdf"
							className="text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium text-center"
							download
						>
							Download Resume
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}

export default NavigationBar;
