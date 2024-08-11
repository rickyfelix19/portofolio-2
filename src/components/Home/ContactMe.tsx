import { Button } from "../ui/button";

function ContactMe() {
	return (
		<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 dark:text-black">
			<div className="bg-slate-300 p-4 rounded-lg h-48 sm:col-span-2 lg:col-span-3 flex flex-col justify-end items-center text-center">
				<h4 className="text-lg font-bold mb-2 text-black">CONTACT ME</h4>
				<p className="text-black">
					Let's have a chat <br />
					<br />
					<Button>Send Email</Button>
				</p>
			</div>
		</div>
	);
}

export default ContactMe;
