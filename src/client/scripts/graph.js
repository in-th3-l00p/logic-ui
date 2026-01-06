/// defining the graph structure of a circuit

import { Bulb } from "./nodes/bulb.js";
import { Constant } from "./nodes/constant.js";

// app's main graph
class Circuit {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(id, x, y, node) {
        this.nodes.push({
            id,
            x, 
            y,
            data: node
        });
    }

    addEdge(from, from_slot, to, to_slot) {
        let found = this
            .edges
            .filter(edge => edge.from === from && edge.to === to);
        if (found.length > 0) {
            found[0].slots.push([from_slot, to_slot]);
            return;
        }
        this.edges.push({
            from, 
            to, 
            slots: [
                [from_slot, to_slot]
            ],
            state: false
        });
    }
}

function createTestCircuit() {
    const circuit = new Circuit();
    circuit.addNode(1, 100, 100, new Constant(true));
    circuit.addNode(2, 200, 100, new Bulb());
    circuit.addEdge(1, 0, 2, 0);
    return circuit;
}

let circuit = createTestCircuit();
console.log(circuit);