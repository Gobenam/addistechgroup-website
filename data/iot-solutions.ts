export interface GetIot {
	title: string;
	slug: string;
	subTitle: string;
	description: string;
	image: string;
}

export interface BuildIot {
	title: string;
	slug: string;
	subTitle?: string;
	description: string;
	image: string;
}

export const GET_IOT: GetIot[] = [
	{
		title: "Addis - Asset",
		slug: "addis-asset",
		subTitle: "Asset Management Software",
		description: `
- Inventory management 
- Maintainance scheduling 
- Incident management 
- Work-order monitoring
- Compliance report generation 
- 24 hours support
- Starting from $5/month 
`,
		image: "/images/iot-solutions/addis-asset.jpg",
	},
	{
		title: "Addis - Automation",
		slug: "addis-automation",
		subTitle: "Modernize your Factory",
		description: `Addis-Automation is PLC hardware and associated secure cloud-based software. It is designed to enable IoT automation even in legacy factories.  

Specifications:  

- PLC supports up to 4 digital outputs and 4 digital input  
- PLC supports up to 4 analog output  
- PLC is programmable either using C++ or Ladder program  
- PLC is controllable from a secure cloud-based dashboard  
`,
		image: "/images/iot-solutions/addis-automation.jpg",
	},
	{
		title: "Addis - Home",
		slug: "addis-home",
		subTitle: "Move-in to the Future",
		description: `
- Smart lights
- Water tank monitoring 
- Security cameras
- Remote door control 
- Starting from $2/month 
`,
		image: "/images/iot-solutions/addis-home.jpg",
	},
];

export const BUILD_IOT: BuildIot[] = [
	{
		title: "Addis - Nano",
		slug: "addis-nano",
		description: `
- Fully compatible with Arduino Nano Every
- Each unit is tested
- 2-year money-return guarantee
- $10 only
- Can ship internationally
`,
		image: "/images/iot-solutions/addis-nano.jpg",
	},
	{
		title: "Addis - ESP32",
		slug: "addis-esp32",
		description: `
- Fully compatible with Arduino Nano ESP32
- Each unit is tested
- 2-year money-return guarantee
- $20 only
- Can ship internationally
`,
		image: "/images/iot-solutions/addis-esp32.jpeg",
	},
];

export const ABOUT: { title: string; slug: string; description: string; image: string } = {
	title: "About Addis Tech",
	slug: "about-us",
	description: `Addis Tech Group is an innovative Ethiopian startup committed to making the Internet of Things (IoT) available for everyone. We develop high-quality and affordable end-to-end IoT solutions. We provide integrated IoT solutions, including hardware, embedded software, and cloud applications, for Smart Home and Factory Automation. We also offer cloud-based Asset Management software. Future development targets Smart Agriculture and Healthcare Asset Tracking.  

Our strength lies in our team. Led by seasoned Ethiopian diaspora engineers with over 40 years of combined experience in US high-tech and defense industries, we bring a wealth of expertise and a rigorous engineering process to ensure the highest product quality. Our team also includes exceptionally talented young Ethiopian engineers, whose skills have been developed through our training and internship programs.  

Addis Tech embodies the values of care and servitude, driving our customer-focused engineering philosophy. We are committed to solving only real customer challenges and providing our solutions for shockingly affordable prices. We are also committed to empowering Ethiopian youth through skill development and contributing to Ethiopia's growth as a leading electronics innovation and manufacturing center.  `,
	image: "",
};

export const HOME: { title: string; slug: string; description: string; image: string } = {
	title: "Addis Tech | Move-in to the Future",
	slug: "home",
	description: "Control, Measure, Manage and Locate your Things from the Internet",
	image: "/images/home-bg.jpg",
};
