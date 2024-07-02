import {
	BellIcon,
	CalendarIcon,
	FileTextIcon,
	GlobeIcon,
	InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";

const features = [
	{
		Icon: FileTextIcon,
		name: "3) Knowledge",
		description:
			"I had three degrees, a diploma in management, bachelor in it, and master in interaction design--making me multi-disciplinary.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		Icon: InputIcon,
		name: "1) The Beginning",
		description:
			"I was born from Medan, Indonesia. A small city where business thrive.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		Icon: GlobeIcon,
		name: "2) Multilingual",
		description: "I can speak Indonesia and English. ",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
	{
		Icon: CalendarIcon,
		name: "4) Goals",
		description:
			"I aim to be a Product Manager. Inspire to create ideas into solutions and into reality.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		Icon: BellIcon,
		name: "5) Skills",
		description:
			"And currently other than UI/UX Design, I able to code with React.js and Javascript. Hence, this website is created.",
		href: "/",
		cta: "Learn more",
		background: <img className="absolute -right-20 -top-20 opacity-60" />,
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
];

function Bento() {
	return (
		<BentoGrid className="lg:grid-rows-3">
			{features.map((feature) => (
				<BentoCard key={feature.name} {...feature} />
			))}
		</BentoGrid>
	);
}

export default Bento;
