"use client";

import Image from "next/image";

const images = [
	"/assets/img/IMG_3737.jpg",
	"/assets/img/IMG_1094.jpg",
	"/assets/img/IMG_9144.jpg",
	"/assets/img/IMG_2624.jpg",
	"/assets/img/IMG_7480.jpg",
	"/assets/img/IMG_2661.jpg",
	"/assets/img/IMG_3424.jpg",
	"/assets/img/IMG_2344-2.jpg",
	"/assets/img/IMG_7902.jpg",
	"/assets/img/IMG_2679.jpg",
	"/assets/img/IMG_8847.jpg",
	"/assets/img/IMG_4541.jpg",
];

export default function Beyond() {
	return (
		<div
			className="container section-container section-container-spacer text-center"
			id="beyond"
		>
			<h2>Beyond</h2>
			<p className="text-xl" style={{ marginBottom: "40px" }}>
				While I'm not behind the computer working on a project, I&apos;m
				probably behind a camera snapping away. Check them out!
			</p>
			<div className="">
				<div className="grid grid-cols-3 gap-2 md:gap-4">
					{images.map((img, idx) => (
						<div className="aspect-square" key={idx}>
							<Image
								height={300}
								width={300}
								src={img}
								alt="Gallery Image"
								className="h-full w-full object-cover rounded-lg"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
