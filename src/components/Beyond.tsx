"use client";

import Image from "next/image";

const images = [
	[
		"/assets/img/IMG_1094.jpg",
		"/assets/img/IMG_9144.jpg",
		"/assets/img/IMG_2624.jpg",
	],
	[
		"/assets/img/IMG_7480.jpg",
		"/assets/img/IMG_2661.jpg",
		"/assets/img/IMG_3424.jpg",
	],
	[
		"/assets/img/IMG_2344-2.jpg",
		"/assets/img/IMG_7902.jpg",
		"/assets/img/IMG_2679.jpg",
	],
	["/assets/img/IMG_8847.jpg", "/assets/img/IMG_4541.jpg"],
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
			<div className="photo-grid">
				{images.map((column, columnIndex) => (
					<div key={columnIndex} className="photo-column">
						{column.map((img, imgIndex) => (
							<Image
								key={imgIndex}
								src={img}
								alt={`Photography ${columnIndex}-${imgIndex}`}
								width={300}
								height={400}
								className="photo-item"
								style={{
									width: "100%",
									height: "auto",
									marginTop: imgIndex > 0 ? "8px" : "0",
								}}
							/>
						))}
					</div>
				))}
			</div>
			<style jsx>{`
				.photo-grid {
					display: flex;
					flex-wrap: wrap;
					padding: 0 4px;
					gap: 8px;
				}

				.photo-column {
					flex: 25%;
					max-width: 25%;
					padding: 0 4px;
				}

				.photo-item {
					margin-top: 8px;
					vertical-align: middle;
					width: 100%;
				}

				@media screen and (max-width: 800px) {
					.photo-column {
						flex: 50%;
						max-width: 50%;
					}
				}

				@media screen and (max-width: 600px) {
					.photo-column {
						flex: 100%;
						max-width: 100%;
					}
				}
			`}</style>
		</div>
	);
}
