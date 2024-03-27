import Konva from "konva";
import { Circle } from "react-konva";

type Props = Konva.CircleConfig;
export default function MyCircle({ ...props }: Props) {
	return <Circle {...props} />;
}
