const Footer = () => {
	return (
		<footer className="bg-black text-white py-12 px-6">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
					<div>
						<h3 className="font-bold text-[24px] mb-4">Abstract</h3>
						<ul className="space-y-2">
							<li><a href="#" className="hover:underline">Start Trial</a></li>
							<li><a href="#" className="hover:underline">Pricing</a></li>
							<li><a href="#" className="hover:underline">Download</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4 text-[24px]">Resources</h3>
						<ul className="space-y-2">
							<li><a href="#" className="hover:underline">Blog</a></li>
							<li><a href="#" className="hover:underline">Help Center</a></li>
							<li><a href="#" className="hover:underline">Release Notes</a></li>
							<li><a href="#" className="hover:underline">Status</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4 text-[24px]">Community</h3>
						<ul className="space-y-2">
							<li><a href="#" className="hover:underline">Twitter</a></li>
							<li><a href="#" className="hover:underline">LinkedIn</a></li>
							<li><a href="#" className="hover:underline">Facebook</a></li>
							<li><a href="#" className="hover:underline">Dribbble</a></li>
							<li><a href="#" className="hover:underline">Podcast</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4 text-[24px]">Company</h3>
						<ul className="space-y-2">
							<li><a href="#" className="hover:underline">About Us</a></li>
							<li><a href="#" className="hover:underline">Careers</a></li>
							<li><a href="#" className="hover:underline">Legal</a></li>
						</ul>
						<div className="mt-6">
							<h4 className="font-bold mb-2 text-[24px]">Contact Us</h4>
							<a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a>
						</div>
					</div>
					<div className="py-14 mt-28 items-center">
						<div className="text-[20px] flex flex-col gap-y-1">
							{/* <img src={Logo} alt="Abstract Logo" className="h-[35px]" /> */}
							<svg className="abstract-logo-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice" width="35" height="35">
								<g className="abstract-logo-mark-footer" fill="#fff">
									<path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
									<circle cx="21.24" cy="29.58" r="4.96"></circle>
								</g>
							</svg>

							<p>© Copyright 2024</p>
							<p>Abstract Studio Design, Inc.</p>
							<p>All rights reserved</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;