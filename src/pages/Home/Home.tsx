import React from "react";

// native components
import NavBar from "../../components/NavBar";
import Bento from "../../components/Bento";
import EmailCard from "../../components/EmailCard";

// magicUI Components
import LinearGradient from "../../components/magicui/linear-gradient";
import TypingAnimation from "../../components/magicui/typing-animation";

function Home() {
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div>
				<LinearGradient />
			</div>
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
				<h4 className="text-slate-100 text-xl sm:text-xl lg:text-xl tracking-tight text-center">
					INTRODUCTION
				</h4>

				<h1 className="text-slate-100 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
					<TypingAnimation text="Transforming Concepts into Seamless User Experience" />
				</h1>
				<p className="mt-6 text-lg text-slate-300 text-center max-w-3xl mx-auto dark:text-black">
					Hi, I am Ricky Felix, a UI/UX Designer from Indonesia. <br />
					Below is the summary about me.
				</p>
				<div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm dark:text-black">
					<div>
						<Bento />
					</div>
					<div>
						<EmailCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
