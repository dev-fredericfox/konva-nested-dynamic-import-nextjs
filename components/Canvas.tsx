import { Stage, Layer, Circle } from "react-konva";

type Props = {
	children?: React.ReactNode;
};
function Canvas({ children }: Props) {
	return (
		<Stage width={window.innerWidth-100} height={window.innerHeight-100}>
			<Layer>
				{children}
				<Circle x={500} y={300} radius={50} fill="green" />
			</Layer>
		</Stage>
	);
}

export default Canvas;
