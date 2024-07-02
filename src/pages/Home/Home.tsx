import React from "react";

// native components
import NavBar from "../../components/NavBar";
import Bento from "../../components/Bento";

// magicUI Components
import LinearGradient from "../../components/magicui/linear-gradient";

function Home() {
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div>
				<LinearGradient />
			</div>
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				<h4 className="text-slate-800 text-xl sm:text-xl lg:text-xl tracking-tight text-center">
					INTRODUCTION
				</h4>

				<h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
					Transforming Concepts into Seamless User Experience
				</h1>

				<p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
					Hi, I am Ricky Felix, a UI/UX Designer from Indonesia
				</p>

				<div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
					<Bento />
				</div>
			</div>
		</div>
	);
}

export default Home;
