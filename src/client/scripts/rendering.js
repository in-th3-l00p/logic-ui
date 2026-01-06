export function renderCircuit(circuit, canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const node of circuit.nodes) {
        node.data.render(ctx, node.x, node.y, 1);
    }
}