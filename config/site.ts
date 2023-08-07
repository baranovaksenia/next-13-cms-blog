// type of siteConfig
export type SiteConfig = {
	siteName: string;
	description: string;
	currentlyAt: string;
	currentlyAtFlag: string;
	currentlyAtDescription: string;
	currentlyAtImage: string;
	currentlyAtImageAlt: string;
	socialLinks: {
		twitter: string;
		youtube: string;
		github: string;
		instagram: string;
		linkedin: string;
	};
};

const siteConfig: SiteConfig = {
	siteName: "Exlorer",
	description: "Explore the world with Exlorer! 🌍 Blog which shares experiences and cities around the world!",
	currentlyAt: "Budapest",
	currentlyAtFlag: "🇭🇺",
	currentlyAtDescription:
		"Budapest is the capital and the most populous city of Hungary, and the ninth-largest city in the European Union by population within city limits.",
	currentlyAtImage:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Parlament_Budapest.jpg/1920px-Parlament_Budapest.jpg",
	currentlyAtImageAlt: "Budapest",
	socialLinks: {
		twitter: "https://twitter.com/your-twitter",
		youtube: "https://youtube.com/your-youtube",
		github: "https://github.com",
		instagram: "https://instagram.com/your-instagram",
		linkedin: "https://linkedin.com/your-linkedin",
	},
};
export default siteConfig;
