import TypingAnimation from "../magicui/typing-animation";

function Introduction() {
	return (
		<div>
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				<h4 className="text-white dark:text-black text-xl sm:text-xl lg:text-xl tracking-tight text-center">
					RICKY FELIX'S PORTFOLIO
				</h4>
				<h1 className="text-white dark:text-black font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
					<TypingAnimation text="Transforming Concepts into Seamless User Experience" />
				</h1>
			</div>
		</div>
	);
}

export default Introduction;
