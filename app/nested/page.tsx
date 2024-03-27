"use client";

import NestedCanvas from "@/app/nested/_components/NestedCanvas";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="h-full w-full">
				<p>Nested Canvas below:</p>
				<NestedCanvas />
			</div>
			<Link href="/">See typical example from docs</Link>
		</>
	);
}
