export const getRoundedCanvas = (sourceCanvas: CanvasImageSource | undefined) => {
    if (!sourceCanvas) throw new Error("Can't get source canvas.")
    let canvas = document.createElement('canvas');
    if (!canvas) throw new Error("Can't get source canvas.")
    let context = canvas.getContext('2d');
    if (!context) return
    let width = sourceCanvas.width;
    let height = sourceCanvas.height;
    if (typeof width !== "number" || typeof height !== "number") throw new Error("Width and height of canvas are not numbers.")
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
}