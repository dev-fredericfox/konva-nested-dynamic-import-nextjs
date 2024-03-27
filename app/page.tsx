"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const Canvas = dynamic(() => import("../components/Canvas"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<div className="h-full w-full">
				<p>Canvas below:</p>
				<Canvas />
			</div>
			<Link href="/nested">See nested example</Link>
		</>
	);
}
