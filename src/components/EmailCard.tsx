import * as React from "react";

import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "../components/ui/select";

function EmailCard() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Copy Email</CardTitle>
				<CardDescription>Copy my email with a single click.</CardDescription>
			</CardHeader>
			<CardContent>
				<Button>Copy Email</Button>
			</CardContent>
		</Card>
	);
}

export default EmailCard;
