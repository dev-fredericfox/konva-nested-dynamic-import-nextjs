import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("../../../components/Canvas"), {
	ssr: false,
});
// Do not: import { Circle } from "react-konva"; this will also lead to the same bug.
const MyCircle = dynamic(() => import("../../../components/Circle"), {
	ssr: false,
});
export default function NestedCanvas() {
	return (
		<Canvas>
			<MyCircle x={200} y={100} radius={50} fill="red" />
		</Canvas>
	);
}
