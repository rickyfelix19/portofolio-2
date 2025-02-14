import NavBar from "../components/Common/NavBar";
import { Link } from "react-router-dom";

export default function NotFound404() {
	return (
		<>
			<NavBar />
			<main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
						404 - Page not found
					</h1>
					<p className="mt-6 text-xl leading-7 text-white ">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							to="/"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Go back home
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
