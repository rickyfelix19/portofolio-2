import React from "react";

import { Button } from "./ui/button";

function ContactMe() {
	return (
		<div>
			<div className="bg-gray-200 p-4 rounded-lg h-48 sm:col-span-2 lg:col-span-3 flex flex-col justify-end items-center text-center">
				<h4 className="text-lg font-bold mb-2 text-black">FIND OUT MORE</h4>
				<p className="text-black">
					Check out my projects through this link. <br />
					<br />
					<Button>Find out more.</Button>
				</p>
			</div>
		</div>
	);
}

export default ContactMe;
