export function startBrush(
	x: number,
	y: number,
	ctx: CanvasRenderingContext2D,
	pressure = 0
) {
	if (pressure > 0) ctx.lineWidth = pressure;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x, y);
	ctx.stroke();
}
export function useBrush(
	x: number,
	y: number,
	ctx: CanvasRenderingContext2D,
	pressure = 0
) {
	if (pressure > 0) ctx.lineWidth = pressure * 5;
	ctx.lineTo(x, y);
	ctx.stroke();
}
