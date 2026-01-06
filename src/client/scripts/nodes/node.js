/// node parent class

const DEFAULT_WIDTH = 160;
const DEFAULT_HEIGHT = 70;

export class Node {
    constructor(
        name = "Node", 
        input_slots_count = 1, 
        output_slots_count = 1
    ) {
        this.name = name;
        this.input_slots_count = input_slots_count;
        this.output_slots_count = output_slots_count;
        this.outputs = [];
    }

    execute(inputs) {
        return inputs;
    }

    render(ctx, x, y, zoom) {
        ctx.fillStyle = "#222";
        ctx.fillRect(
            x, 
            y, 
            DEFAULT_WIDTH * zoom, 
            DEFAULT_HEIGHT * zoom
        );
        ctx.fillStyle = "#fff";
        ctx.font = `${14 * zoom}px Arial`;
        const w = DEFAULT_WIDTH * zoom;
        const h = DEFAULT_HEIGHT * zoom;
        const prevAlign = ctx.textAlign;
        const prevBaseline = ctx.textBaseline;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.name, x + w / 2, y + h / 2);
        ctx.textAlign = prevAlign;
        ctx.textBaseline = prevBaseline;
    }

    getOutputs() {
        return this.outputs;
    }
}