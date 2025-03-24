// import React from 'react';

const Illustrator = () => {
	return (
		<div className="flex-1 flex flex-col items-center justify-center pt-20 pl-20 mr-16">
			{/* Illustration Container */}
			<div className="relative w-full max-w-[350px] aspect-square mb-8">
				<div className="absolute inset-0 bg-blue-50 rounded-full flex items-center justify-center">
					{/* Two people illustration */}
					<svg className="w-2/5 h-2/5" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g transform="translate(100, 100)">
							{/* Person 1 - Yellow */}
							<g transform="translate(0, 50)">
								<circle fill="#FDD663" cx="40" cy="40" r="40"/>
								<path d="M40,90 C17.909,90 0,107.909 0,130 L80,130 C80,107.909 62.091,90 40,90" fill="#F4B400"/>
							</g>
							{/* Person 2 - Green */}
							<g transform="translate(160, 50)">
								<circle fill="#A8DAB5" cx="40" cy="40" r="40"/>
								<path d="M40,90 C17.909,90 0,107.909 0,130 L80,130 C80,107.909 62.091,90 40,90" fill="#34A853"/>
							</g>
							{/* Link Icon */}
							<g transform="translate(85, 85)">
								<circle fill="#4285F4" cx="30" cy="30" r="30"/>
								<path d="M30,15 L45,30 L30,45 L15,30 Z" fill="#FFFFFF"/>
							</g>
						</g>
					</svg>
				</div>
			</div>

			{/* Text Content */}
			<div className="text-center max-w-sm">
				<h2 className="text-2xl font-normal text-gray-900 mb-2">
					Get a link you can share
				</h2>
				<p className="text-gray-600">
					Click <span className="font-medium">New meeting</span> to get a link you can send to people you want to meet with
				</p>
			</div>

			{/* Carousel Dots */}
			<div className="flex gap-2 mt-6">
				<div className="w-2 h-2 rounded-full bg-blue-600"></div>
				<div className="w-2 h-2 rounded-full bg-gray-300"></div>
				<div className="w-2 h-2 rounded-full bg-gray-300"></div>
			</div>
		</div>
	);
}

export default Illustrator;
