import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Gaurav Shilpakar - Software Developer",
	description:
		"Personal portfolio website of Gaurav Shilpakar, Software Developer at MetLife. Computer Engineer specializing in full-stack development, automation, and design.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
